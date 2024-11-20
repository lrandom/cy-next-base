import {axiosInstance} from "@/services/Axios";

export default async function Page() {
    const resp = await axiosInstance.get('api/v1/user');
    return (<div>{JSON.stringify(resp.data)}</div>)
};