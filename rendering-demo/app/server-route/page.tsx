
import { serverSideFuntion } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";

export default function ServerRoute(){
    const result = serverSideFuntion();
    return(
        <>
            <h1>Server route {result}</h1>
            <ImageSlider/>
        </>
    )
}