import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import Image from "next/image";
import im1 from "../../public/1.jpeg";
import im2 from "../../public/2.jpeg";
import im3 from "../../public/مكرونة الهيثم1.png";
import im4 from "../../public/4.jpeg";
import im5 from "../../public/5.jpeg";
import im6 from "../../public/6.jpeg";
import im7 from "../../public/7.jpeg";
import im8 from "../../public/8.jpeg";
import im9 from "../../public/كريب الهيثم1.png";
import Link from "next/link";
import { Button } from "./ui/button";
// import im9 from "../../public/9.jpeg";
const Tables2 = () => {
  const sandwichs = [
    {
      id: 1,
      name: "بطاطس",
      prices: ["20", "25"],
    },
    {
      id: 2,
      name: "فلافل",
      prices: ["15", "20"],
    },
    {
      id: 3,
      name: "ميكس فلافل بطاطس",
      prices: ["25", ""],
    },
    {
      id: 4,
      name: "بطاطس بالبيض",
      prices: ["27", ""],
    },
    {
      id: 5,
      name: "بطاطس بالجبنة",
      prices: ["25", "30"],
    },
    {
      id: 6,
      name: "بطاطس لانشون",
      prices: ["25", "30"],
    },
    {
      id: 7,
      name: "بطاطس جبنة لانشون",
      prices: ["35", ""],
    },
    {
      id: 8,
      name: "هوت دوج",
      prices: ["35", ""],
    },
    {
      id: 9,
      name: "هوت دوج بالجبنة",
      prices: ["45", ""],
    },
    {
      id: 10,
      name: "سجق سوري",
      prices: ["35", ""],
    },
    {
      id: 11,
      name: "سجق سوري بالجبنة",
      prices: ["45", ""],
    },
  ];
  const salads = [
    {
      id: 1,
      name: "علبة تومية",
      prices: ["10", "15-20"],
    },
    {
      id: 2,
      name: "مسبحة",
      prices: ["10", "15"],
    },
    {
      id: 3,
      name: "طبق ارز بسمتي",
      prices: ["30", "40"],
    },
    {
      id: 4,
      name: "طبق بطاطس",
      prices: ["10", "15"],
    },
    {
      id: 5,
      name: "طبق بطاطس بالجبنة",
      prices: ["20", "25"],
    },
  ];
  const makarony = [
    {
      id: 1,
      name: " معكرونة سادة",
      prices: ["40", ""],
    },
    {
      id: 2,
      name: "معكرونة جبنة موزريلا",
      prices: ["50", ""],
    },
    {
      id: 3,
      name: "خضار ( جبنة + فلفل + زيتون ) ",
      prices: ["60", ""],
    },
    {
      id: 4,
      name: "نجريسكو",
      prices: ["70", ""],
    },
    {
      id: 5,
      name: "شاورما فراخ",
      prices: ["70", ""],
    },
    {
      id: 6,
      name: "بانيه",
      prices: ["70", ""],
    },
    {
      id: 7,
      name: "سجق",
      prices: ["60", ""],
    },
    {
      id: 8,
      name: "هوت دوج",
      prices: ["60", ""],
    },
  ];
  const kreb = [
    {
      id: 1,
      name: "كريب بطاطس",
      prices: ["35", ""],
    },
    {
      id: 2,
      name: "كريب ميكس جبن",
      prices: ["45", ""],
    },
    {
      id: 3,
      name: "كريب سجق",
      prices: ["50", ""],
    },
    {
      id: 4,
      name: "كريب هوت دوج",
      prices: ["50", ""],
    },
    {
      id: 5,
      name: "كريب شاورما",
      prices: ["65", ""],
    },
    {
      id: 6,
      name: "كريب كريسبي",
      prices: ["65", ""],
    },
    {
      id: 7,
      name: "كريب بانيه",
      prices: ["65", ""],
    },
    {
      id: 8,
      name: "",
      prices: ["", ""],
    },
    {
      id: 9,
      name: "كريب زنجر",
      prices: ["65", ""],
    },
    {
      id: 10,
      name: "كريب تشكن رول",
      prices: ["65", ""],
    },
    {
      id: 11,
      name: "كريب شيش طاووق",
      prices: ["65", ""],
    },
    {
      id: 12,
      name: "كريب مكسيكي",
      prices: ["65", ""],
    },
    {
      id: 13,
      name: "",
      prices: ["", ""],
    },
    {
      id: 14,
      name: "كريب فاهيتا",
      prices: ["70", ""],
    },
    {
      id: 15,
      name: "كريب كرانشي",
      prices: ["75", ""],
    },
    {
      id: 16,
      name: "كريب برجر فراخ",
      prices: ["70", ""],
    },
    {
      id: 17,
      name: "كريب برجر لحم",
      prices: ["80", ""],
    },
    {
      id: 18,
      name: "كريب ميكس الهيثم",
      prices: ["80", ""],
    },
    {
      id: 19,
      name: "كريب ميكس فراخ",
      prices: ["75", ""],
    },
    {
      id: 20,
      name: "كريب ميكس لحوم",
      prices: ["80", ""],
    },
    {
      id: 21,
      name: "كريب نوتلا",
      prices: ["50", ""],
    },
    {
      id: 22,
      name: "كريب نوتلا موز",
      prices: ["55", ""],
    },
    {
      id: 23,
      name: "كريب نوتلا بوريو",
      prices: ["60", ""],
    },
  ];
  const meals = [
    {
      id: 1,
      name: "وجبة سوبر كرانشي",
      description: "خمسة قطع صدور فراخ مقرمشة + تركي مدخن + موزريلا",
      prices: ["120", ""],
    },
    {
      id: 2,
      name: "وجبة كريسبي",
      description: "خمسة قطع صدور فراخ مقرمشة ",
      prices: ["110", ""],
    },
    {
      id: 3,
      name: "وجبة كريسبي",
      description: "ثلاثة قطع صدور فراخ مقرمشة",
      prices: ["90", ""],
    },
    {
      id: 4,
      name: "وجبة زنجر",
      description: "خمسة قطع صدور فراخ مقرمشة حارة",
      prices: ["110", ""],
    },
    {
      id: 5,
      name: "وجبة بانيه",
      description: "خمسة قطع اسكالوب بانيه فراخ ",
      prices: ["110", ""],
    },
    {
      id: 6,
      name: "وجبة كوردن بلو",
      description:
        "اربع قطع فراخ رول محشية تركي و موزريلا سايحة + صوص الباشاميل",
      prices: ["120", ""],
    },
    {
      id: 7,
      name: "وجبة تشكن رول",
      description: "اربع قطع فراخ رول محشية تركي وجبنة موزريلا",
      prices: ["110", ""],
    },
    {
      id: 8,
      name: "وجبة فاهيتا",
      description:
        "صدور فراخ مشوية جريل و فلفل و ذرة صفراء و صوص الصويا و موزريلا",
      prices: ["120", ""],
    },
    {
      id: 9,
      name: "وجبة مكسيكي حارة ",
      description:
        "صدور فراخ مشوية جريل و فلفل الوان و بصل شرائح و صوص الصويا و هريسة شطة",
      prices: ["110", ""],
    },
    {
      id: 10,
      name: "وجبة شيش طاووق ",
      description: "ثلاث اسياخ فراخ متبلة مشوية جريل 350 جم ثقريبا",
      prices: ["110", ""],
    },
    {
      id: 11,
      name: "وجبة تشكن جريل",
      description: "صدور فراخ مشوية جريل",
      prices: ["110", ""],
    },
    {
      id: 12,
      name: "وجبة هوت دوج",
      description: "شرائح هوت دوج مشوية مع البصل والفلفل",
      prices: ["80", ""],
    },
    {
      id: 13,
      name: "وجبة هوت دوج بالجبنة",
      description: "شرائح هوت دوج مشوية مع البصل و فلفل وجبنة موزريلا",
      prices: ["90", ""],
    },
  ];
  const Grilledchicken = [
    {
      id: 1,
      name: "فرخة كاملة مشوية",
      prices: ["230", ""],
    },
    {
      id: 2,
      name: "نص فرخة مشوية ",
      prices: ["115", ""],
    },
    {
      id: 3,
      name: "ورك مشوي",
      prices: ["65", ""],
    },
    {
      id: 4,
      name: "صدر مشوي ",
      prices: ["75", ""],
    },
  ];
  const burger = [
    {
      id: 1,
      name: "برجر لحمة",
      prices: ["50", ""],
    },
    {
      id: 2,
      name: "برجر لحمة بالجبنة",
      prices: ["60", ""],
    },
    {
      id: 3,
      name: "برجر لحمة بالجبنة والبيض",
      prices: ["70", ""],
    },
    {
      id: 4,
      name: "تشكن برجر",
      prices: ["45", ""],
    },
    {
      id: 5,
      name: "تشكن برجر بالجبنة ",
      prices: ["55", ""],
    },
    {
      id: 6,
      name: "تشكن برجر جبنة + بيض",
      prices: ["65", ""],
    },
  ];
  const chickenSandwich = [
    {
      id: 1,
      name: "سوبر كرانشي",
      prices: ["60", ""],
    },
    {
      id: 2,
      name: "تشكن روول",
      prices: ["50", ""],
    },
    {
      id: 3,
      name: "كرسبي",
      prices: ["50", ""],
    },
    {
      id: 4,
      name: "مكسيكي حار",
      prices: ["50", ""],
    },
    {
      id: 5,
      name: "زنجر حار",
      prices: ["50", ""],
    },
    {
      id: 6,
      name: "بانيه",
      prices: ["50", ""],
    },
    {
      id: 7,
      name: "شيش طاووق",
      prices: ["50", ""],
    },
    {
      id: 8,
      name: "سندوتش فاهيتا",
      prices: ["60", ""],
    },
  ];
  const shawrma = [
    {
      id: 1,
      name: "شاورما فراخ ",
      prices: ["50", ""],
    },
    {
      id: 2,
      name: "شاورمة بالجبنة",
      prices: ["60", ""],
    },
    {
      id: 3,
      name: "فتة شاورما",
      prices: ["75", ""],
    },
    {
      id: 4,
      name: "فتة شاورما بالجبنة",
      prices: ["85", ""],
    },
    {
      id: 5,
      name: "وجبة شاورما عربي",
      prices: ["70", ""],
    },
    {
      id: 6,
      name: "وجبة شاورما عربي دبل",
      prices: ["130", ""],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-around w-full ">
      <Link href={"/"} className=" mt-5">
        <Button className="text-2xl">Home</Button>
      </Link>
      <div className="flex flex-col mt-5 mb-5 w-full md:flex-row ">
        <div className="w-full flex flex-col items-center">
          <Image src={im1} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12 ">
            <TableCaption>السندوتشات</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {sandwichs.map((sandwich) => {
              return (
                <TableBody key={sandwich.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {sandwich.prices?.map((price) => {
                      return (
                        <TableCell key={sandwich.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {sandwich.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
        <div className=" w-full flex flex-col items-center">
          <Image src={im2} alt="" width={400} height={400} />
          <Table className=" m-auto  w-11/12">
            <TableCaption>سلطات و مقبلات</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {salads.map((salad) => {
              return (
                <TableBody key={salad.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {salad.prices?.map((price) => {
                      return (
                        <TableCell key={salad.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {salad.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
      <div className="flex flex-col mt-5 mb-5 w-full md:flex-row">
        <div className="w-full flex flex-col items-center">
          <Image src={im3} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>معكرونة</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {makarony.map((plate) => {
              return (
                <TableBody key={plate.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {plate.prices?.map((price) => {
                      return (
                        <TableCell key={plate.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {plate.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
        <div className=" w-full flex flex-col items-center">
          <Image src={im9} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>كريب</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {kreb.map((drink) => {
              return (
                <TableBody key={drink.id}>
                  <TableRow className="">
                    {drink.prices?.map((price) => {
                      return (
                        <TableCell key={drink.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {drink.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
      <div className="flex flex-col mt-5 mb-5 w-full md:flex-row">
        <div className="w-full flex flex-col items-center">
          <Image src={im6} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>وجبات</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {meals.map((meal) => {
              return (
                <TableBody key={meal.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {meal.prices?.map((price) => {
                      return (
                        <TableCell key={meal.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {meal.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src={im5} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>فراخ مشوية </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {Grilledchicken.map((Grilledchicke) => {
              return (
                <TableBody key={Grilledchicke.id}>
                  <TableRow className="">
                    {Grilledchicke.prices?.map((price) => {
                      return (
                        <TableCell key={Grilledchicke.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {Grilledchicke.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
      <div className="flex flex-col mt-5 mb-5 w-full md:flex-row">
        <div className="w-full flex flex-col items-center">
          <Image src={im4} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>تشكن ساندوتش</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>

            {chickenSandwich.map((chickenSandwic) => {
              return (
                <TableBody key={chickenSandwic.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {chickenSandwic.prices?.map((price) => {
                      return (
                        <TableCell
                          key={chickenSandwic.id}
                          className="text-left"
                        >
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {chickenSandwic.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src={im8} alt="" width={400} height={400} />{" "}
          <Table className=" m-auto w-11/12">
            <TableCaption>برجر</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>

            {burger.map((burgers) => {
              return (
                <TableBody key={burgers.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {burgers.prices?.map((price) => {
                      return (
                        <TableCell key={burgers.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {burgers.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
      <div className="flex flex-col mt-5 mb-5 w-full md:flex-row">
        <div className="w-full flex flex-col items-center">
          <Image src={im7} alt="" width={400} height={400} />
          <Table className=" m-auto w-11/12">
            <TableCaption>تشكن شاورما</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">السعر</TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right">الاسم</TableHead>
              </TableRow>
            </TableHeader>
            {shawrma.map((shawrmas) => {
              return (
                <TableBody key={shawrmas.id}>
                  <TableRow className="">
                    {/* {sandwich.prices.map((p) => {teturn})} */}
                    {shawrmas.prices?.map((price) => {
                      return (
                        <TableCell key={shawrmas.id} className="text-left">
                          {price}
                        </TableCell>
                      );
                    })}
                    <TableCell className="font-medium text-right">
                      {shawrmas.name}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tables2;
