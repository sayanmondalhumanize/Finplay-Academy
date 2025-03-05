import React from "react";
import "./Leaderboard.css";
import { DataGrid } from "@mui/x-data-grid";
import { leaderboardData } from "../../dummyData";

const columns = [
    { field: "rank", headerName: "Rank", width: 100 },
    { field: "player", headerName: "Player", width: 200 },
    { field: "won", headerName: "Won", width: 120 },
    { field: "trades", headerName: "Trades", width: 120 },
    { field: "winRate", headerName: "Win Rate", width: 120 },
    { field: "volume", headerName: "Volume", width: 120 }
];

export default function Leaderboard() {
    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Leaderboard</h1>
            <div className="leaderboard-table">
                <DataGrid
                    rows={leaderboardData.map((row, index) => ({ id: index, ...row }))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    );
}
