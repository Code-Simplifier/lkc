import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageHeader from "@/components/custom/PageHeader";
import { curriculum } from "@/constants/academics";
import { Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { secondary } from "@/app/fonts";

const Curriculum = () => {
  return (
    <div className="pt-36 flex flex-col items-center justify-center">
      <PageHeader title="Curriculum (2024-25)" />
      <div className="w-[60%] my-5 flex self-center">
        <Table>
          <TableHeader>
            <TableRow className={secondary.className}>
              <TableHead className="text-left">Department</TableHead>
              <TableHead className="text-right">Curriculum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {curriculum.map((data) => (
              <TableRow key={String(data)}>
                <TableCell className="text-left">{data.title}</TableCell>
                <TableCell className="p-0 flex justify-end pt-2 w-[90%]">
                  <Link href={data.url} target="_blank">
                    <Download />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Curriculum;
