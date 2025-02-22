import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs/promises";
import Tag from "@/components/Tag/Tag";
import MDXContainer from "@/components/MDXContainer/MDXContainer";
import Divider from "@/components/Divider/Divider";
import DownloadButton from "@/components/DownloadButton/DownloadButton";
import CustomImage from "@/components/CustomImage/CustomImage";

export default async function Home() {
  const content = await fs.readFile(
    path.join(process.cwd(), `/src/content/career.mdx`),
    "utf8"
  );

  return (
    <MDXRemote
      source={content}
      components={{
        Tag: Tag,
        MDXContainer: MDXContainer,
        Divider: Divider,
        DownloadButton: DownloadButton,
        CustomImage: CustomImage,
        img: CustomImage,
      }}
    />
  );
}
