import requests
from bs4 import BeautifulSoup
from sqlalchemy.orm import Session
from app.models.stock import Stock
import re
 

def extract_float(text):
    """Extracts the first float value from a string using regex."""
    match = re.search(r"[-+]?\d*\.\d+|\d+", text.replace(',', ''))
    return float(match.group()) if match else 0.0

def scrape_stock_data(db: Session):
    url = "https://finance.yahoo.com/markets/stocks/most-active/"
    
    # Add headers to mimic a real browser
    headers = {"User-Agent": "Mozilla/5.0"}
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return {"error": f"Failed to fetch data, status code: {response.status_code}"}

    soup = BeautifulSoup(response.text, "html.parser")
    table_rows = soup.select("tbody tr")
    
    stocks = []
    
    for row in table_rows:
        columns = row.find_all("td")

        # DEBUG: Print raw column contents to verify order
        raw_data = [col.text.strip() for col in columns]
        # print(f"Raw data for row: {raw_data}")

        if len(columns) < 7:  # Adjusted for potential extra columns
            continue
        
        try:
            symbol = columns[0].text.strip()
            name = columns[1].text.strip()
            price = extract_float(columns[3].text.strip())  
            change = extract_float(columns[4].text.strip())  
            percent_change = extract_float(columns[5].text.strip().replace('%', ''))  
            volume = extract_float(columns[6].text.strip())  
            precent_fiftytwo_week_change = columns[10].text.strip()  # Extra column

            stock = Stock(
                symbol=symbol,
                name=name,
                price=price,
                change=change,
                percent_change=percent_change,
                volume=volume,
                precent_fiftytwo_week_change=precent_fiftytwo_week_change
            )

            db.merge(stock)  # Upsert: Merge new stock data into the database
            stocks.append(stock)
        
        except ValueError as e:
            print(f"Error parsing stock data for {symbol}: {e}")  # Log error but continue processing

    db.commit()  # Save changes
    return stocks  