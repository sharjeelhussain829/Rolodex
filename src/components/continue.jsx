import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

const Continue = ({src, headText, childText}) => {
    return (
        <Box sx={{ flexGrow: 1 }} className="bg-gradient-to-b from-[#25AEE1] to-[#fff]">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} sx={{flexDirection: "column"}} className=" flex justify-center items-center">
                    <h1 className="text-4xl text-center font-phoppin">{headText}</h1>
                    <p className='text-center w-90'>{childText}</p>
                    <Box className={"flex gap-4 mt-4"}>
                        <p className='bg-[#fff] cursor-pointer px-4 rounded-2xl py-1 font-noto'>Notify me</p>
                        <p className='px-4 rounded-lg py-1 cursor-pointer font-noto'>Lorem</p>
                        <p className='px-4 rounded-lg py-1 cursor-pointer font-noto'>Lorem</p>
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
    )
}

export default Continue;
