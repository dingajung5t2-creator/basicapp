import axios from "axios";

export async function getTrafficData(big, small) {
    // 한국도로교통공단_사고유형별 교통사고 통계_20231231
    const url =
        "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&";

    const params = {
        serviceKey: process.env.REACT_APP_TRAFFIC_API_KEY,
        // VITE 사용시 : VITE_
        // CRA 사용시 : REACT_APP_
        bigType: big,
        smallType: small,
        type: "json"
    };

    // console.log(params);

    const response = await axios.get(url, { params });

    console.log("items:", response.data.data);

    const data = response.data.data;

    return data.find(item =>
        item.사고유형대분류 === big &&
        item.사고유형중분류 === small
    );
}