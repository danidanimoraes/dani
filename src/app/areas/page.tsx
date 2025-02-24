import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs/promises";
import Tag from "@/app/(components)/Tag/Tag";
import MDXContainer from "@/app/(components)/MDXContainer/MDXContainer";
import Divider from "@/app/(components)/Divider/Divider";
import CustomImage from "@/app/(components)/CustomImage/CustomImage";

export default async function Areas() {
  const content = await fs.readFile(
    path.join(process.cwd(), `/src/content/areas.mdx`),
    "utf8"
  );

  return (
    <MDXRemote
      source={content}
      components={{
        Tag: Tag,
        MDXContainer: MDXContainer,
        Divider: Divider,
        CustomImage: CustomImage,
        img: CustomImage,
      }}
    />
  );
}
