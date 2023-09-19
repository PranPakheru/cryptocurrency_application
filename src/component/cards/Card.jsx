import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../source/context/MyContext";

const Cards = () => {
  const { cryptoList, searchedCoin } = useContext(MyContext);
  console.log(cryptoList);
  return (
    <>
      {/* {console.log(coins)} */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Cryptocurrency</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Image
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Price (in INR)
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Price Change (in 24Hr)
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Ranking
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Market Cap
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoList
              .filter((crypto) =>
                crypto.name.toLowerCase().includes(searchedCoin.toLowerCase())
              )
              .map((coin) => (
                <TableRow
                  key={coin.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {coin.name}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      style={{ width: "30px" }}
                      src={coin.image}
                      alt="image"
                    />
                  </TableCell>
                  <TableCell align="right">{coin.current_price}</TableCell>
                  <TableCell align="right">{coin.price_change_24h}</TableCell>
                  <TableCell align="right">{coin.market_cap_rank}</TableCell>
                  <TableCell align="right">{coin.market_cap}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cards;
