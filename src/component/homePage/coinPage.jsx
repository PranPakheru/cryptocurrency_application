import React, { useContext, useEffect, useState } from "react";
import "./SearchPageStyle.css";
import {
  AppBar,
  Pagination,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { AxiosService } from "../../source/services/AxiosService";
import Cards from "../cards/Card";
import MyContext from "../../source/context/MyContext";

const coinPage = () => {
  const axiosService = new AxiosService();
  const { cryptoList, setCryptoList, searchedCoin, setSearchedCoin } =
    useContext(MyContext);
  const [pageNav, setPageNav] = useState(1);
  const totalPage = 41;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchCryptoList();
    setPageNav(1);
  }, []);

  const fetchCryptoList = (page = 1) => {
    setLoader(true);
    axiosService
      .fetchCryptoData(page)
      .then((response) => {
        if (response) {
          setCryptoList(response);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <div className="thePage">
      <div className="upperMenu">
        <AppBar position="sticky">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Cryptocurrency app...
            </Typography>
            <input className="searchBar"
              type="text"
              value={searchedCoin}
              placeholder="search crypto..."
              onChange={(e) => {
                setSearchedCoin(e.target.value);
              }}
            />
          </Toolbar>
        </AppBar>
      </div>

      <div>
        {loader ? (
          <div style={{ height: "100vh" }}>
            <h1
              style={{ color: "white", textAlign: "center", marginTop: "40vh" }}
            >
              loading...
            </h1>{" "}
          </div>
        ) : (
          <div>
            <div className="cards">
              <Cards />
            </div>

            <div className="paginationDiv">
              <Pagination
                sx={{ color: "white" }}
                count={totalPage}
                color="primary"
                page={pageNav}
                onChange={(event, page) => {
                  setPageNav(page);
                  setSearchedCoin("");
                  fetchCryptoList(page);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default coinPage;
