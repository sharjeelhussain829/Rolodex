import * as React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import {  MdFacebook } from "react-icons/md";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Continue = ({ src, headText, childText } : any) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="bg-gradient-to-b from-[#fff] to-[#25AEE1]"
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{ flexDirection: "column" }}
          className=" flex justify-center items-center"
        >
          <h1 className="text-4xl text-center font-phoppin font-medium">{headText}</h1>
          <p className="text-center text-2xl w-90 mt-6">
            {childText
              ? childText
              : "we will launch our mobile application soon."}
            <br />
            In the meantime, stay with a Rolodex.
          </p>
          <Box className={"flex gap-2 mt-4"}>
            <p className="bg-[#fff] flex items-center gap-2 text-[16px] cursor-pointer px-4 rounded-3xl border-[1px] border-[#0000002f] py-2 font-noto">
              Notify me <VscSend className="text-[20px]"/>
            </p>
            <p className="px-4 rounded-lg py-1 cursor-pointer font-noto">
              <MdFacebook className="text-4xl text-[#0000005b]" />
            </p>
            <p className="px-4 rounded-lg py-1 cursor-pointer font-noto">
              <FaTwitter className="text-4xl text-[#0000005b]" />
            </p>
            <p className="px-4 rounded-lg py-1 cursor-pointer font-noto">
              <FaInstagram className="text-4xl text-[#0000005b]" />
            </p>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Image
            src={src}
            className="w-full z-10 h-full"
            sizes="100vw"
            height={0}
            width={0}
            alt={"icon"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Continue;
