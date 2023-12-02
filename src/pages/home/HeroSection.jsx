import React from "react";
import BarBg from "../../assets/barBg.webp"; // Import the image

export default function HeroSection() {
  return (
    <div className="w-screen h-screen ">
      <div className="h-screen w-screen bg-primary">
        <img src={BarBg} alt="" />
        <div className="bg-primary z-0 flex flex-col items-center rounded-t-full h-[547px] w-full  bottom-0 absolute">
          <div className="flex flex-col items-center mt-10">
            <svg
              width="35"
              height="35"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-8"
            >
              <path
                d="M18.9997 7.78507C12.9022 7.78507 7.94167 12.7456 7.94167 18.8431C7.94167 24.9406 12.9022 29.9012 18.9997 29.9012C25.0972 29.9012 30.0578 24.9406 30.0578 18.8431C30.0578 12.7456 25.0971 7.78507 18.9997 7.78507ZM18.9997 28.7022C13.5634 28.7022 9.14058 24.2793 9.14058 18.8431C9.14058 13.4067 13.5634 8.98391 18.9997 8.98391C24.4361 8.98391 28.8588 13.4067 28.8588 18.8431C28.8588 24.2794 24.4361 28.7022 18.9997 28.7022Z"
                fill="white"
              />
              <path
                d="M37.3894 20.5412L34.5588 18.2349C33.8909 17.6907 33.7496 16.708 34.2371 15.9977L36.3033 12.9874C36.6351 12.504 36.6879 11.8969 36.4443 11.3636C36.2008 10.8302 35.7075 10.4725 35.1248 10.4067L31.4966 9.99691C30.6405 9.9002 29.9903 9.14994 30.0165 8.28879L30.1273 4.63921C30.1451 4.05311 29.8612 3.514 29.3679 3.19709C28.8747 2.88003 28.2663 2.84581 27.7406 3.1055L24.4669 4.72226C23.6944 5.10374 22.7418 4.82409 22.2982 4.08547L20.4182 0.955417C20.1163 0.452741 19.586 0.152679 18.9997 0.152679C18.4134 0.152679 17.8831 0.452741 17.5813 0.955417L15.7013 4.08547C15.2577 4.82409 14.3051 5.10374 13.5326 4.72226L10.2588 3.1055C9.73313 2.84581 9.12477 2.8801 8.63145 3.19709C8.1382 3.51407 7.85431 4.05319 7.87205 4.63928L7.98286 8.28879C8.00898 9.14994 7.35884 9.9002 6.50274 9.99691L2.87461 10.4067C2.29193 10.4724 1.79867 10.8301 1.55517 11.3635C1.31151 11.8968 1.3642 12.5039 1.69611 12.9873L3.76232 15.9976C4.24986 16.708 4.10855 17.6907 3.44067 18.2348L0.610005 20.5412C0.155422 20.9116 -0.0661175 21.4792 0.0173031 22.0596C0.100724 22.64 0.473296 23.1221 1.01375 23.3494L4.37952 24.7647C5.17372 25.0987 5.58615 26.0018 5.31845 26.8207L4.18403 30.2912C4.0019 30.8486 4.12235 31.4459 4.50628 31.889C4.89028 32.3321 5.46413 32.5366 6.04184 32.4353L9.63851 31.8063C10.4874 31.6581 11.3224 32.1947 11.5399 33.0283L12.4619 36.5612C12.61 37.1285 13.0342 37.5659 13.5967 37.7311C13.7529 37.7769 13.9114 37.7994 14.0683 37.7994C14.4763 37.7994 14.8724 37.6475 15.184 37.3605L17.8696 34.8868C18.5034 34.3031 19.4962 34.3031 20.1298 34.8868L22.8155 37.3605C23.2468 37.7577 23.8401 37.8962 24.4027 37.7311C24.9653 37.5659 25.3896 37.1286 25.5376 36.5612L26.4596 33.0283C26.6772 32.1947 27.5123 31.6579 28.361 31.8064L31.9577 32.4354C32.5351 32.5365 33.1093 32.3323 33.4932 31.8891C33.8772 31.446 33.9978 30.8486 33.8156 30.2913L32.6811 26.8209C32.4134 26.0019 32.8258 25.0989 33.62 24.7649L36.9858 23.3495C37.5262 23.1222 37.8988 22.6401 37.9822 22.0597C38.0656 21.4792 37.844 20.9115 37.3894 20.5412ZM36.7955 21.8889C36.7844 21.9656 36.7356 22.1539 36.521 22.2442L33.1553 23.6595C31.7903 24.2335 31.0815 25.7857 31.5415 27.1931L32.676 30.6636C32.7484 30.8849 32.638 31.0451 32.5873 31.1037C32.5364 31.1623 32.3938 31.2941 32.1643 31.2542L28.5676 30.6252C27.1087 30.3697 25.6735 31.2927 25.2996 32.7255L24.3776 36.2584C24.3188 36.4836 24.1394 36.5587 24.0649 36.5806C23.9905 36.6024 23.799 36.6363 23.6277 36.4786L20.9421 34.0049C20.3975 33.5033 19.6986 33.2526 18.9997 33.2526C18.3008 33.2526 17.6019 33.5033 17.0574 34.0049L14.3717 36.4786C14.2005 36.6363 14.0089 36.6024 13.9345 36.5806C13.8601 36.5588 13.6807 36.4837 13.6219 36.2584L12.6999 32.7255C12.3261 31.2928 10.8907 30.3702 9.43188 30.6253L5.8353 31.2543C5.60589 31.2945 5.4631 31.1624 5.41233 31.1038C5.36157 31.0453 5.2512 30.8849 5.32364 30.6637L6.45806 27.1932C6.91813 25.7857 6.20935 24.2336 4.84434 23.6596L1.47857 22.2442C1.26394 22.154 1.2151 21.9657 1.20412 21.8889C1.19313 21.8122 1.1869 21.6178 1.3674 21.4707L4.19806 19.1645C5.34598 18.2292 5.58882 16.5402 4.7509 15.3194L2.68468 12.3091C2.55287 12.1172 2.61366 11.9323 2.64587 11.8618C2.67808 11.7912 2.77798 11.6243 3.00931 11.5982L6.63752 11.1885C8.10888 11.0223 9.2263 9.73269 9.18147 8.25264L9.07067 4.60314C9.06362 4.37039 9.21465 4.24779 9.27981 4.20585C9.34505 4.16407 9.51946 4.07753 9.72801 4.18069L13.0018 5.79745C14.3294 6.45309 15.9667 5.97231 16.7292 4.70296L18.6091 1.57291C18.7289 1.37334 18.9222 1.35181 18.9998 1.35181C19.0774 1.35181 19.2707 1.37341 19.3905 1.57298L21.2704 4.70304C22.0328 5.97238 23.67 6.45316 24.9978 5.79752L28.2714 4.18077C28.4801 4.07753 28.6545 4.16407 28.7197 4.20593C28.7849 4.24786 28.936 4.37047 28.9289 4.60314L28.818 8.25272C28.7732 9.73284 29.8906 11.0224 31.362 11.1885L34.9902 11.5983C35.2215 11.6244 35.3214 11.7913 35.3537 11.8618C35.3859 11.9324 35.4466 12.1172 35.3148 12.3092L33.2486 15.3195C32.4106 16.5403 32.6535 18.2293 33.8015 19.1647L36.6321 21.471C36.8126 21.6177 36.8064 21.8121 36.7955 21.8889Z"
                fill="white"
              />
            </svg>
            <p className="text-white text-2xl">121</p>
            <p className="text-white text-[115px] font-kanit">BAR</p>
            <p className="text-white text-[17px]">Lokale Bar mit Live-Musik</p>
            <button className="text-white text-[17px] my-9 border px-6 py-3">
              Tisch Reservieren
            </button>
            <p className="text-white text-[15px]">Lindenstraße 14, 10969</p>
            <p className="text-white text-[15px]">Berlin</p>
          </div>
        </div>
      </div>
      <div>heyooo</div>
    </div>
  );
}
