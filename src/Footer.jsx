export const Footer = () => {
  return (
    // <footer className="bg-blackk text-light-grey pb-6 relative w-full bottom-0">
    //   <hr className="my-4 border-light-grey" />
    //   <div className="flex flex-col-reverse gap-4 w-fit mx-auto sm:flex-row sm:w-[90%] sm:max-w-[1000px] sm:items-center sm:justify-between ">
    //     <p className="flex items-center gap-1 mx-auto sm:mx-0">
    //       <i className="ri-copyright-line"></i>
    //       {new Date().getFullYear()} Chibuike Ukandu
    //     </p>
    //     <div className="flex justify-between gap-6">
    //       <a href="https://twitter.com/Chibuike035">
    //         <i className="ri-twitter-fill text-[2rem]  hover:text-white"></i>
    //       </a>
    //       <a href="https://github.com/Jay035">
    //         <i className="ri-github-fill text-[2rem] hover:text-white"></i>
    //       </a>
    //       <a href="https://www.linkedin.com/in/chibuike-ukandu-8385401b0/">
    //         <i className="ri-linkedin-box-fill text-[2rem] hover:text-white"></i>
    //       </a>
    //       <a href="mailto:codexjay08@gmail.com">
    //         <i className="ri-mail-line text-[2rem] hover:text-white"></i>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <footer
      id="contact"
      className="bg-blackk border-t border-[#1d2939] pt-20 pb-10 md:pb-14 md:pt-[84px] px-[9.5vw]"
    >
      <h1 className="text-[#9E77ED] tracking-[-0.03em] font-medium text-lg md:text-2xl lg:text-[30px] xl:leading-[40px] flex items-center">
        Have a project<i className="ri-question-mark"></i>{" "}
      </h1>
      <h2 className="mt-4 mb-6 text-white text-[40px] leading-[1] md:text-5xl lg:text-7xl tracking-[-0.03em]">
        Get in touch
      </h2>
      <section className="flex md:items-center flex-col sm:flex-row justify-between gap-8">
        <a
          href="mailto:codexjay08@gmail.com"
          className="bg-[#9CFF8F] hover:bg-[#9CFF8F]/80 rounded-[30px] w-fit flex items-center gap-[10px] py-2 md:py-3 px-4"
        >
          Send me an email{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7V17M17 7H7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="flex gap-4 items-center">
          <a href="https://twitter.com/Chibuike035">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                fill="#9CA3AF"
              />
            </svg>
          </a>
          <a href="https://github.com/Jay035">
            <i className="ri-github-fill text-[1.75rem] text-[#9CA3AF]"></i>
          </a>
          <a href="https://wa.me/+2349039930886">
            <svg
              className="w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"
                fill="rgba(156,163,175,1)"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/chibuike-ukandu/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_804)">
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_804">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </section>
    </footer>
  );
};
