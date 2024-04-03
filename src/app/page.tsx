import Image from "next/image";
import styles from "./page.module.css";
import UpLoad from "@/components/client/UpLoad";
import Hot from "@/components/service/Hot";
import DecodeString from "@/components/client/DecodeString";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <UpLoad /> */}
      <Suspense fallback={<>loading...</>}>
        <Hot />
      </Suspense>
      {/* <DecodeString /> */}
    </main>
  );
}
