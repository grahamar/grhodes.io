import React from 'react'

import s from './index.module.css'

const name = 'Graham'
const gradient = {
  idle: {
    start: '#EC6EAD',
    stop: '#3494E6',
  },
  active: {
    start: '#e23b8e',
    stop: '#1989ea',
  },
}

const Twitter = () => (
  <svg
    className={s.icon}
    xmlns="http://www.w3.org/2000/svg"
    width="37px"
    height="30px"
    viewBox="0 0 37 30"
    version="1.1"
  >
    <title>{name}s Twitter Profile</title>
    <desc>Twitter Icon</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal">
        <stop stopColor={gradient.idle.start} offset="0%" />
        <stop stopColor={gradient.idle.stop} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="85.7919034%"
        y2="83.046875%"
        id="hover"
      >
        <stop stopColor={gradient.active.start} offset="0%" />
        <stop stopColor={gradient.active.stop} offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-1272.000000, -907.000000)" fill="url(#normal)">
        <g id="icon" transform="translate(1162.000000, 907.000000)">
          <path
            d="M121.531373 30C135.368347 30 142.93532 18.4592328 142.93532 8.45199776 142.93532 8.12405871 142.92872 7.79774385 142.91376 7.47290553 144.38248 6.40403981 145.65936 5.0702832 146.666667 3.55166406 145.318653 4.15453445 143.86812 4.56073 142.346453 4.74396834 143.899507 3.80651448 145.092053 2.32288929 145.654373 0.554587603 144.200613 1.42205357 142.59124 2.05312583 140.877733 2.39287718 139.504933 0.920768981 137.550013 0 135.386533 0 131.231907 0 127.86268 3.39190267 127.86268 7.57286714 127.86268 8.16732127 127.928827 8.74509051 128.057893 9.29967811 121.805933 8.98325606 116.261787 5.96949473 112.552 1.38705962 111.905347 2.50597998 111.533107 3.80651448 111.533107 5.19357411 111.533107 7.82107315 112.86132 10.1405664 114.880773 11.4975047 113.646867 11.4592623 112.487467 11.1178868 111.47356 10.550158 111.471947 10.5817559 111.471947 10.6133538 111.471947 10.6465759 111.471947 14.3148865 114.065453 17.3769306 117.50728 18.0713463 116.87544 18.2443965 116.2106 18.3377137 115.5242 18.3377137 115.039613 18.3377137 114.568227 18.2894309 114.11004 18.201134 115.067627 21.2100227 117.84476 23.3995807 121.13772 23.4612999 118.562547 25.492573 115.31916 26.7031864 111.794467 26.7031864 111.18756 26.7031864 110.58872 26.6681924 110 26.5982045 113.329333 28.7462717 117.282293 30 121.531373 30"
            id="twitter"
          />
        </g>
      </g>
    </g>
  </svg>
)

const LinkedIn = () => (
  <svg
    className={s.icon}
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 30 30"
    version="1.1"
  >
    <title>LinkedIn</title>
    <desc>{name}s LinkedIn Profile</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal">
        <stop stopColor={gradient.idle.start} offset="0%" />
        <stop stopColor={gradient.idle.stop} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="85.7919034%"
        y2="83.046875%"
        id="hover"
      >
        <stop stopColor={gradient.active.start} offset="0%" />
        <stop stopColor={gradient.active.stop} offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fillRule="evenodd" fill="url(#normal)">
      <g transform="translate(-1162.000000, -907.000000)">
        <g transform="translate(1162.000000, 907.000000)">
          <path
            d="M25.56375 25.5639583L21.1170833 25.5639583 21.1170833 18.6016667C21.1170833 16.940625 21.0866667 14.8052083 18.805 14.8052083 16.489375 14.8052083 16.1347917 16.6139583 16.1347917 18.4814583L16.1347917 25.5639583 11.6883333 25.5639583 11.6883333 11.2470833 15.956875 11.2470833 15.956875 13.2033333 16.0160417 13.2033333C16.6097917 12.0777083 18.06125 10.8908333 20.2260417 10.8908333 24.731875 10.8908333 25.56375 13.8560417 25.56375 17.7108333L25.56375 25.5639583ZM6.67375 9.29C5.2475 9.29 4.093125 8.13354167 4.093125 6.709375 4.093125 5.28625 5.2475 4.13020833 6.67375 4.13020833 8.09625 4.13020833 9.25229167 5.28625 9.25229167 6.709375 9.25229167 8.13354167 8.09625 9.29 6.67375 9.29L6.67375 9.29ZM4.44791667 25.5639583L8.89770833 25.5639583 8.89770833 11.2470833 4.44791667 11.2470833 4.44791667 25.5639583ZM27.7797917 0L2.214375 0C0.992708333 0 0 0.968333333 0 2.16229167L0 27.8352083C0 29.0302083 0.992708333 30 2.214375 30L27.7797917 30C29.0035417 30 30.0004167 29.0302083 30.0004167 27.8352083L30.0004167 2.16229167C30.0004167 0.968333333 29.0035417 0 27.7797917 0L27.7797917 0Z"
            id="linkedin"
          />
        </g>
      </g>
    </g>
  </svg>
)

const Github = () => (
  <svg
    className={s.icon}
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    version="1.1"
  >
    <title>Github</title>
    <desc>{name}s Github Profile</desc>
    <defs>
      <linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="normal">
        <stop stopColor={gradient.idle.start} offset="0%" />
        <stop stopColor={gradient.idle.stop} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="85.7919034%"
        y2="83.046875%"
        id="hover"
      >
        <stop stopColor={gradient.active.start} offset="0%" />
        <stop stopColor={gradient.active.stop} offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fillRule="evenodd" fill="url(#normal)">
      <g transform="translate(-1162.000000, -907.000000)">
        <g transform="translate(1162.000000, 907.000000)">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            id="github"
          />
        </g>
      </g>
    </g>
  </svg>
)

class SocialIcons extends React.Component {
  render() {
    return (
      <p>
        <a href="https://twitter.com/RhodesGraham">
          <Twitter />
        </a>

        <a href="https://www.linkedin.com/in/rhodesgraham">
          <LinkedIn />
        </a>

        <a href="https://github.com/grahamar">
          <Github />
        </a>
      </p>
    )
  }
}
export default SocialIcons
