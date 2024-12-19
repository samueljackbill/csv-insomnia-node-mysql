import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  // Declarar a variável para receber o arquivo
  const [arquivo, setArquivo] = useState('');

  // Executar a função quando o usuário clicar no botão do formulário
  const uploadArquivo = async (e) => {

    // Bloquear o recarregamento da página
    e.preventDefault();

    //console.log("Upload");

    // Criar o objeto com os dados
    const formData = new FormData();
    formData.append('arquivo', arquivo);

    // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
  }

  return (
    <>
      <Head>
        <title>ASC</title>
        <meta name="description" content="ASC Developer Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>

          <h1>ASC Developer Project</h1>

          <p>Criar uma tela para upload de arquivo CSV, que contém dados de um contato. O
          arquivo CSV anexado a este projeto deve ser utilizado como base de testes...</p>

          <ol>
            <li>
              Faça upload do arquivo CSV <code>./campanha.csv</code>
            </li>
            <li>Cadastre o arquivo para que os dados sejam inseridos no banco de dados</li>
          </ol>

          <div className={styles.ctas}>
            <form onSubmit={uploadArquivo}>
              
              <label for='arquivo'>Carregar Arquivo CSV: </label>
              <input type='file' accept='.csv' name='arquivo' onChange={(e) => setArquivo(e.target.files[0])}/><br /><br />

              <button type="submit">Cadastrar</button><br /><br />

            </form>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/samueljackbill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin-brands-solid.svg"
              alt="Linkedin icon"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://github.com/samueljackbill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github-brands-solid.svg"
              alt="GitHUB icon"
              width={16}
              height={16}
            />
          </a>
          <a
            href="https://www.instagram.com/samueljackbill/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/instagram-brands-solid.svg"
              alt="Instagram icon"
              width={16}
              height={16}
            />
          </a>
        </footer>
      </div>
    </>
  );
}
