import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs/promises";
import Tag from "@/components/Tag/Tag";
import MDXContainer from "@/components/MDXContainer/MDXContainer";
import Divider from "@/components/Divider/Divider";

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
      }}
    />
  );
}
