"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";

export default function Contact() {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form?.current) {
      emailjs
        .sendForm("service_5g6h7n2", "template_n5ch2xl", form?.current, {
          publicKey: "6R3fbnW2eIZDl3er3",
        })
        .then(
          () => {
            alert("Seu email foi enviado. Boa sorte 🚀");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert(
              "Um erro ocorreu ao enviar o email 😭. Tente novamente ou envie um email manualmente para danimoraes.barbosa@gmail.com"
            );
          }
        );
    }
  };

  return (
    <>
      <p>
        Gostaria de entrar participar do processo seletivo para me contratar?
      </p>
      <p>Envie já seu email!!</p>
      <br />
      <br />

      <form ref={form} onSubmit={sendEmail} className={styles.container}>
        <div className={styles.field}>
          <label>Nome</label>
          <div className={styles.inputWithCounter}>
            <input
              required
              type="text"
              name="user_name"
              maxLength={55}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event?.target.value)
              }
            />
            <div className={styles.counter}>{name.length}/55</div>
          </div>
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <div className={styles.inputWithCounter}>
            <input
              required
              type="text"
              name="user_email"
              maxLength={55}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event?.target.value)
              }
            />
            <div className={styles.counter}>{email.length}/55</div>
          </div>
        </div>

        <div className={styles.field}>
          <label>Mensagem</label>
          <div className={styles.inputWithCounter}>
            <textarea
              required
              name="message"
              maxLength={230}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setMsg(event?.target.value)
              }
            />
            <div className={styles.counter}>{msg.length}/230</div>
          </div>
        </div>

        <button type="submit">Enviar email</button>
      </form>
    </>
  );
}
