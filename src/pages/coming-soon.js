import Head from 'next/head';
import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import dog from 'public/images/doguinho.png';

export default function Home() {
  return (
    <div className="wrapper">

      <style>{`
        html,
        body {
          overflow-x: hidden;
          padding: 0;
          margin: 0;
          min-height: 100vh;
          font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          color: #0f2830;
          background: #fff4e0;
          overflow: hidden;
        }
        
        .wrapper::before {
          content: "";
          position: absolute;
          width: 26%;
          height: 100%;
          background-color: #004851;
          z-index: -3;
        }
        
        .dog {
          position: absolute;
          height: 100%;
          bottom: 0;
          left: 75px;
          padding-top: 70px;
          z-index: -1;
        }
        @media (max-width: 1200px) {
          .dog {
            height: 80%;
          }
        }
        
        .line {
          position: absolute;
          bottom: 0;
          z-index: -2;
          right: 0;
          width: 99%;
        }
        
        .btn {
          border: 1px solid #ff6a39;
          border-radius: 4px;
          padding: 16px 20px;
          display: flex;
          gap: 12px;
          font-weight: bold;
          transition: all 350ms;
        }
        .btn svg {
          width: 24px;
          height: 24px;
        }
        
        .btn-primary {
          background-color: #ff6a39;
          color: #fff4e0;
        }
        .btn-primary:hover {
          color: #ff6a39;
          background-color: #fff4e0;
        }
        
        .btn-secondary {
          background-color: #fff4e0;
          color: #ff6a39;
        }
        .btn-secondary:hover {
          color: #fff4e0;
          background-color: #ff6a39;
        }
        
        .textContent {
          margin-top: 15%;
        }
        .textContent > * {
          margin: 0;
        }
        .textContent .brand {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 64px;
        }
        .textContent h1 {
          font-family: "Nunito Sans", sans-serif;
          font-size: 72px;
          line-height: 72px;
          font-weight: bold;
          margin-bottom: 32px;
          letter-spacing: 0.02em;
        }
        .textContent p {
          font: var(--body-sm);
          margin-bottom: 48px;
          max-width: 430px;
        }
        .textContent .buttons {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        
        @media (max-width: 992px) {
          body {
            position: relative;
          }
          body::before {
            bottom: 0;
            width: 100%;
            height: 96px;
          }
        
          .wrapper {
            position: relative;
          }
        
          .dog {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            bottom: -6px;
            height: 600px;
            padding-top: 24px;
          }
        
          .line {
            width: 130%;
            bottom: 80px;
          }
        
          .textContent {
            text-align: center;
          }
          .textContent .brand {
            justify-content: center;
            margin-bottom: 48px;
          }
          .textContent .brand > :first-child {
            display: none;
          }
          .textContent h1 {
            font-size: 40px;
            margin-bottom: 24px;
            line-height: 48px;
          }
          .textContent p {
            margin: auto;
            margin-bottom: 32px;
          }
          .textContent .buttons {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media (max-width: 576px) {
          .col-12 {
            padding: 0 30px !important;
          }
        
          .dog {
            height: 450px;
          }
        
          .line {
            transform: scale(2);
          }
        }        
    `}</style>

      <Head>
        <title>Casulo</title>
        <meta name="description" content="Casulo - Centro Canino" />
        <link rel="icon" href="/images/symbol.svg" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-6">
            <div className="textContent">
              <div className="brand">
                <img src="/images/symbol.svg" alt="Símbolo" />
                <img src="/images/type.svg" alt="Logotipo" />
              </div>

              <h1>Nosso novo site está chegando.</h1>
              <p>Nos siga nas redes sociais para receber atualizações ou fale conosco pelo nosso WhatsApp.</p>

              <div className="buttons">
                <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=555199142232">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_112_39)"><path d="M20.4015 4.13403C19.3012 3.02355 17.9909 2.14315 16.547 1.54414C15.103 0.945131 13.5543 0.639492 11.991 0.645032C5.4405 0.645032 0.102 5.98203 0.096 12.534C0.096 14.6325 0.645 16.674 1.6815 18.4815L0 24.645L6.306 22.992C8.05051 23.9414 10.0049 24.439 11.991 24.4395H11.997C18.549 24.4395 23.886 19.1025 23.892 12.5445C23.8935 10.9816 23.5857 9.43381 22.9864 7.99035C22.3871 6.54689 21.5081 5.23628 20.4 4.13403H20.4015ZM11.991 22.4265C10.2195 22.4271 8.48055 21.9504 6.957 21.0465L6.597 20.8305L2.856 21.8115L3.855 18.162L3.621 17.7855C2.63071 16.211 2.10697 14.3881 2.1105 12.528C2.1105 7.08903 6.546 2.65203 11.997 2.65203C13.2956 2.6497 14.5818 2.90444 15.7815 3.40157C16.9812 3.8987 18.0706 4.62837 18.987 5.54853C19.9065 6.46511 20.6355 7.55467 21.1319 8.75438C21.6282 9.95409 21.8822 11.2402 21.879 12.5385C21.873 17.997 17.4375 22.4265 11.991 22.4265ZM17.4135 15.0255C17.118 14.877 15.6585 14.1585 15.384 14.0565C15.111 13.959 14.9115 13.908 14.7165 14.205C14.517 14.5005 13.947 15.174 13.776 15.3675C13.605 15.567 13.428 15.5895 13.131 15.4425C12.8355 15.2925 11.877 14.9805 10.743 13.965C9.858 13.1775 9.2655 12.2025 9.0885 11.907C8.9175 11.61 9.072 11.451 9.2205 11.3025C9.351 11.1705 9.516 10.9545 9.6645 10.7835C9.8145 10.6125 9.864 10.4865 9.9615 10.2885C10.059 10.0875 10.0125 9.91653 9.939 9.76803C9.864 9.61953 9.2715 8.15403 9.021 7.56303C8.781 6.97953 8.5365 7.06053 8.3535 7.05303C8.1825 7.04253 7.983 7.04253 7.7835 7.04253C7.63285 7.04628 7.48459 7.08112 7.34804 7.14488C7.21149 7.20864 7.08959 7.29993 6.99 7.41303C6.717 7.71003 5.9535 8.42853 5.9535 9.89403C5.9535 11.3595 7.0185 12.768 7.1685 12.9675C7.3155 13.167 9.2595 16.1655 12.243 17.4555C12.948 17.763 13.503 17.9445 13.9365 18.0825C14.649 18.3105 15.2925 18.276 15.8055 18.2025C16.3755 18.1155 17.562 17.4825 17.8125 16.788C18.0585 16.092 18.0585 15.498 17.9835 15.3735C17.91 15.2475 17.7105 15.174 17.4135 15.0255Z" fill="currentColor" /></g><defs><clipPath id="clip0_112_39"><rect width="24" height="24" fill="currentColor" transform="translate(0 0.645264)" /></clipPath></defs></svg>
                  +55 51 9914.2232
                </a>
                <a className="btn btn-secondary" href="https://instagram.com/casulo.adestra">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_112_52)"><path d="M12 0.645264C8.7435 0.645264 8.334 0.660264 7.0545 0.717264C5.775 0.777264 4.9035 0.978264 4.14 1.27526C3.33914 1.57649 2.61374 2.049 2.0145 2.65976C1.40411 3.25931 0.931661 3.98462 0.63 4.78526C0.333 5.54726 0.1305 6.42026 0.072 7.69526C0.015 8.97776 0 9.38576 0 12.6468C0 15.9048 0.015 16.3128 0.072 17.5923C0.132 18.8703 0.333 19.7418 0.63 20.5053C0.9375 21.2943 1.347 21.9633 2.0145 22.6308C2.6805 23.2983 3.3495 23.7093 4.1385 24.0153C4.9035 24.3123 5.7735 24.5148 7.0515 24.5733C8.3325 24.6303 8.7405 24.6453 12 24.6453C15.2595 24.6453 15.666 24.6303 16.947 24.5733C18.2235 24.5133 19.098 24.3123 19.8615 24.0153C20.6618 23.7139 21.3867 23.2414 21.9855 22.6308C22.653 21.9633 23.0625 21.2943 23.37 20.5053C23.6655 19.7418 23.868 18.8703 23.928 17.5923C23.985 16.3128 24 15.9048 24 12.6453C24 9.38576 23.985 8.97776 23.928 7.69676C23.868 6.42026 23.6655 5.54726 23.37 4.78526C23.0684 3.9846 22.5959 3.25928 21.9855 2.65976C21.3864 2.04878 20.661 1.57623 19.86 1.27526C19.095 0.978264 18.222 0.775764 16.9455 0.717264C15.6645 0.660264 15.258 0.645264 11.997 0.645264H12.0015H12ZM10.9245 2.80826H12.0015C15.2055 2.80826 15.585 2.81876 16.8495 2.87726C18.0195 2.92976 18.6555 3.12626 19.0785 3.28976C19.638 3.50726 20.0385 3.76826 20.4585 4.18826C20.8785 4.60826 21.138 5.00726 21.3555 5.56826C21.5205 5.98976 21.7155 6.62576 21.768 7.79576C21.8265 9.06026 21.8385 9.43976 21.8385 12.6423C21.8385 15.8448 21.8265 16.2258 21.768 17.4903C21.7155 18.6603 21.519 19.2948 21.3555 19.7178C21.1631 20.2388 20.856 20.7099 20.457 21.0963C20.037 21.5163 19.638 21.7758 19.077 21.9933C18.657 22.1583 18.021 22.3533 16.8495 22.4073C15.585 22.4643 15.2055 22.4778 12.0015 22.4778C8.7975 22.4778 8.4165 22.4643 7.152 22.4073C5.982 22.3533 5.3475 22.1583 4.9245 21.9933C4.40325 21.8011 3.93169 21.4946 3.5445 21.0963C3.14513 20.7093 2.83758 20.2377 2.6445 19.7163C2.481 19.2948 2.2845 18.6588 2.232 17.4888C2.175 16.2243 2.163 15.8448 2.163 12.6393C2.163 9.43526 2.175 9.05726 2.232 7.79276C2.286 6.62276 2.481 5.98676 2.646 5.56376C2.8635 5.00426 3.1245 4.60376 3.5445 4.18376C3.9645 3.76376 4.3635 3.50426 4.9245 3.28676C5.3475 3.12176 5.982 2.92676 7.152 2.87276C8.259 2.82176 8.688 2.80676 10.9245 2.80526V2.80826ZM18.4065 4.80026C18.2174 4.80026 18.0301 4.83751 17.8554 4.90988C17.6807 4.98224 17.522 5.08831 17.3883 5.22203C17.2545 5.35575 17.1485 5.51449 17.0761 5.6892C17.0037 5.86391 16.9665 6.05116 16.9665 6.24026C16.9665 6.42937 17.0037 6.61662 17.0761 6.79133C17.1485 6.96604 17.2545 7.12478 17.3883 7.2585C17.522 7.39221 17.6807 7.49828 17.8554 7.57065C18.0301 7.64302 18.2174 7.68026 18.4065 7.68026C18.7884 7.68026 19.1547 7.52855 19.4247 7.2585C19.6948 6.98845 19.8465 6.62218 19.8465 6.24026C19.8465 5.85835 19.6948 5.49208 19.4247 5.22203C19.1547 4.95198 18.7884 4.80026 18.4065 4.80026ZM12.0015 6.48326C11.1841 6.47051 10.3723 6.62049 9.61347 6.92448C8.85459 7.22846 8.16377 7.68037 7.58123 8.2539C6.99868 8.82743 6.53605 9.51111 6.22026 10.2652C5.90448 11.0192 5.74185 11.8285 5.74185 12.646C5.74185 13.4635 5.90448 14.2728 6.22026 15.0269C6.53605 15.7809 6.99868 16.4646 7.58123 17.0381C8.16377 17.6117 8.85459 18.0636 9.61347 18.3676C10.3723 18.6715 11.1841 18.8215 12.0015 18.8088C13.6193 18.7835 15.1623 18.1231 16.2975 16.9701C17.4326 15.8171 18.0689 14.264 18.0689 12.646C18.0689 11.028 17.4326 9.47488 16.2975 8.32189C15.1623 7.16889 13.6193 6.5085 12.0015 6.48326ZM12.0015 8.64476C13.0625 8.64476 14.08 9.06624 14.8303 9.81648C15.5805 10.5667 16.002 11.5843 16.002 12.6453C16.002 13.7063 15.5805 14.7238 14.8303 15.474C14.08 16.2243 13.0625 16.6458 12.0015 16.6458C10.9405 16.6458 9.92296 16.2243 9.17272 15.474C8.42248 14.7238 8.001 13.7063 8.001 12.6453C8.001 11.5843 8.42248 10.5667 9.17272 9.81648C9.92296 9.06624 10.9405 8.64476 12.0015 8.64476Z" fill="currentColor" /></g><defs><clipPath id="clip0_112_52"><rect width="24" height="24" fill="currentColor" transform="translate(0 0.645264)" /></clipPath></defs></svg>
                  @casulo.adestra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img alt="Cachorro" className="dog" src="/images/doguinho.png" />
      <img alt="Linha" className="line" src="/images/line.svg" />

    </div>
  )
}
