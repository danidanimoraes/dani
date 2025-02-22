import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs/promises";
import MDXContainer from "@/components/MDXContainer/MDXContainer";
import CustomImage from "@/components/CustomImage/CustomImage";

export default async function About() {
  const content = await fs.readFile(
    path.join(process.cwd(), `/src/content/about.mdx`),
    "utf8"
  );

  return (
    <MDXRemote
      source={content}
      components={{
        MDXContainer: MDXContainer,
        CustomImage: CustomImage,
        img: CustomImage,
      }}
    />
  );
}
