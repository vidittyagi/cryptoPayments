import React from "react";
import { Box, Image, Text, Flex, footer } from "theme-ui";
import Avatar from "../../../components/Avatar/Avatar";
import messiProfileImg from "../../../assets/messiProfileImg.jpeg";
import arrowUp from "../../../assets/arrowUp.png";
import Button from "../../../components/Button/Button";
import ethIcon from "../../../assets/ethIcon.png";
import { XYPlot, LineSeries } from "react-vis";
import { useEffect } from "react";
import { useState } from "react";
import btcIcon from "../../../assets/btcIcon.png";
import ltcIcon from "../../../assets/ltcIcon.png";
import tabOne from "../../../assets/tabOne.png";
import tabTwo from "../../../assets/tabTwo.png";
import tabThree from "../../../assets/tab3.png";

const DashboardMobile = () => {
  const [staticData, setStaticData] = useState([]);

  useEffect(() => {
    let data = [
      {
        logo: ethIcon,
        name: "Ethereum",
        shortName: "ETH",
        price: "$503.12",
        equivalentPrice: "50 ETH",
      },
      {
        logo: btcIcon,
        name: "Bitcoin",
        shortName: "BTC",
        price: "$26927",
        equivalentPrice: "2.05 BTC",
      },
      {
        logo: ltcIcon,
        name: "Litecoin",
        shortName: "LTC",
        price: "$6927",
        equivalentPrice: "2.05 LTC",
      },
    ];
    setStaticData(data);
  }, []);
  const graphData = [
    { x: 0, y: 8 },
    { x: 1, y: 9 },
    { x: 2, y: 7 },
    { x: 3, y: 1 },
    { x: 4, y: 3 },
    { x: 5, y: 8 },
    { x: 6, y: 5 },
    { x: 7, y: 3 },
    { x: 8, y: 8 },
    { x: 9, y: 9 },
  ];
  return (
    <Box
      p={4}
      sx={{
        height: "100vh",
        background: "#070707",
      }}
    >
      <Box mb={3} sx={{ height: ["20%", "20%", "15%", "15%", "5%", "5%"] }}>
        <Avatar
          //   sx={{ width: "100px", height: "100px" }}
          size={60}
          img={messiProfileImg}
          message="avatar"
        />
        <Box
          mt={2}
          sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: "24px" }}
        >
          <Text>Hello Messi</Text>
        </Box>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(45deg, #B7D7EA, #F1E1C4, #E7BBB1)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          padding: "12px",
          height: "100px",
        }}
      >
        <Box sx={{ fontWeight: 400, fontSize: "16px" }} mt={1}>
          <Text>Current Balance</Text>
        </Box>
        <Box mt={2}>
          <Text sx={{ fontWeight: 700, fontSize: "24px", color: "#1D1D1D" }}>
            $87,430.12
          </Text>
          <Text sx={{ color: "#6552FE" }} ml={3}>
            <Image src={arrowUp} />
            10.2%
          </Text>
        </Box>
      </Box>
      <Flex mt={3}>
        <Button
          sx={{
            background: "#6552FE",
            borderRadius: "24px",
            width: "50%",
            padding: "10px 24px",
          }}
        >
          Deposit
        </Button>
        <Button
          ml={3}
          sx={{
            border: "1px solid #FFFFFF",
            borderRadius: "24px",
            padding: "10px 24px",
            width: "50%",
            background: "#070707",
          }}
        >
          Withdraw
        </Button>
      </Flex>

      <Flex sx={{ flexDirection: "column" }} mt={4}>
        <Box sx={{ fontWeight: 700, fontSize: "20px", color: "#FFFFFF" }}>
          <Text>Holdings</Text>
        </Box>

        {staticData.map((data, key) => {
          return (
            <Flex key={key} sx={{ height: "50%" }} mt={3}>
              <Box sx={{ width: "20%" }}>
                <Image src={data.logo} />
              </Box>
              <Box sx={{ color: "#FFFFFF", width: "20%" }}>
                <Box sx={{ fontWeight: 700, fontSize: "16px" }}>
                  <Text>{data.name}</Text>
                </Box>
                <Box sx={{ fontWeight: 400, fontSize: "14px" }}>
                  <Text>{data.shortName}</Text>
                </Box>
              </Box>
              <Box sx={{ color: "blue", width: "40%" }}>
                <XYPlot height={70} width={100}>
                  <LineSeries data={graphData} />
                </XYPlot>
              </Box>
              <Box ml={3} sx={{ color: "#FFFFFF", width: "20%" }}>
                <Box sx={{ fontWeight: 700, fontSize: "16px" }}>
                  <Text>{data.price}</Text>
                </Box>
                <Box sx={{ fontWeight: 700, fontSize: "10px" }}>
                  {data.equivalentPrice}
                </Box>
              </Box>
            </Flex>
          );
        })}
      </Flex>

      <Flex
        sx={{
          color: "white",
          height: "60px",
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 0,
          background: "#121212",
        }}
      >
        <Flex
          sx={{
            height: "60px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={tabOne} />
        </Flex>
        <Flex
          sx={{
            height: "60px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={tabTwo} />
        </Flex>
        <Flex
          sx={{
            height: "60px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={tabThree} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardMobile;
