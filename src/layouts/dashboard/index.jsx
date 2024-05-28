import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";
import { Nav_Buttons } from "../../data"
import { faker } from '@faker-js/faker';
import { Outlet } from "react-router-dom";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();

  const { onToggleMode } = useSettings();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (index) => {
    setSelectedTab(index);
  };

  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          height: "100vh",
          width: 100,

          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          py={3}
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                height: 64,
                width: 64,
                borderRadius: 1.5,
                backgroundColor: theme.palette.primary.main,
              }}
              p={1}
            >
              <img src={Logo} alt="Tawk" />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((el) => (
                el.index === selectedTab ?
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    key={el.index}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "#fff" : "#000"  }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                  :
                  <IconButton onClick={() => {
                    handleChangeTab(el.index);
                  }}
                    sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "#000" : "#fff" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
              ))}
              <Divider sx={{ width: 48 }} />
              {selectedTab === 3 ?
                <Box
                  sx={{
                    height: 64,
                    width: 64,
                    borderRadius: 1.5,
                    backgroundColor: theme.palette.primary.main,
                  }}
                  p={1}
                >
                  <IconButton sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "#fff" : "#000" }} >
                    <Gear />
                  </IconButton>
                </Box>
                :
                <IconButton
                  sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "#000" : "#fff" }}
                  onClick={() => {
                    handleChangeTab(3);
                  }}
                >
                  <Gear />
                </IconButton>}

            </Stack>
          </Stack>
          <Stack spacing={4} alignItems={"center"}>
            
            <AntSwitch
            onChange = {()=>{
              onToggleMode();
              
            }}
            defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack >
      </Box >
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
