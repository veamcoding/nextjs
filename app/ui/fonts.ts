import {Inter, Lusitana} from "next/font/google";

// 글꼴을 에셋을 사전에 호스팅해서 사용자가 폰트가 변환되는걸 방지할 수 있게 만들 수 있다
// 글꼴 파일을 다른 정적 에셋과 함께 호스팅하여 추가적인 네트워크 요청이 없도록 합니다.

export const inter = Inter({ subsets : ["latin" ]});

export const lusitana = Lusitana({ weight: ["700", "400"] , subsets: ["latin"] });