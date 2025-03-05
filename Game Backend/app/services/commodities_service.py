import requests
from bs4 import BeautifulSoup
from sqlalchemy.orm import Session
from app.models.commodities import Commodities
import re


def extract_float(text):
    """Extracts the first float value from a string using regex."""
    match = re.search(r"[-+]?\d*\.\d+|\d+", text.replace(',', ''))
    return float(match.group()) if match else 0.0



def scrape_commodities_data(db: Session):
    url = "https://finance.yahoo.com/markets/commodities/"

     # Add headers to mimic a real browser
    headers = {"User-Agent": "Mozilla/5.0"}
    
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        return {"error": f"Failed to fetch data, status code: {response.status_code}"}
    
    soup = BeautifulSoup(response.text, "html.parser")
    table_rows = soup.select("tbody tr")
    commodities_data = []
    
    for row in table_rows:
        columns = row.find_all("td")
        if len(columns) < 5:
            continue
        
        
        try:
            commodity = Commodities(
                symbol=columns[0].text.strip(),
                name=columns[1].text.strip(),
                last_price=extract_float(columns[2].text.replace(',', '').strip()),
                change=extract_float(columns[3].text.replace(',', '').strip()),
                percent_change=extract_float(columns[4].text.replace('%', '').strip()),
                volume=extract_float(columns[5].text.replace(',', '').strip()) if len(columns) > 5 else None
            )
            db.merge(commodity)
            commodities_data.append(commodity)
            
        except ValueError as e:
            print(f"Error parsing stock data for {commodity.symbol}: {e}")  # Log error but continue processing

    db.commit()
    return commodities_data