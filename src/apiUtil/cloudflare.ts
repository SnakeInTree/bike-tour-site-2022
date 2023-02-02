import {Buffer} from "buffer";
import axios, {AxiosRequestConfig} from "axios";
import cloudFlareConfig from "../config/testEnv.json";

export const fetchImages = async (cloudFlareIds:string[] | null | undefined) => {
    if (!cloudFlareIds) return;
    return await Promise.all(cloudFlareIds.map(fetchImage));
};

export const fetchImage = async (cloudFlareId: string) => {
    const options: AxiosRequestConfig = {
        method: "GET",
        url: cloudFlareConfig.CLOUDFLARE_IMG_DELIVERY_URL_PREFIX + cloudFlareId + cloudFlareConfig.CLOUDFLARE_IMG_DELIVERY_URL_VARIANT,
        responseType: "arraybuffer"
    };

    const response = await axios(options);
    return Buffer.from(response.data, "binary").toString("base64");
};