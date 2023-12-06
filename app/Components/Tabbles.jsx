import React from 'react'
import Image from 'next/image'
import im1 from '../../public/2.jpeg'
import im2 from '../../public/1.jpeg'
import im6 from '../../public/6.jpeg'
import im5 from '../../public/5.jpeg'
import im8 from '../../public/8.jpeg'
import im4 from '../../public/4.jpeg'
import im7 from '../../public/7.jpeg'
import Link from 'next/link'
const Tabbles = () => {
  return (
     <div className='Minue'>
     <Link href={'/'}><h1 style={{textAlign: 'center', marginTop: '50px', color: '#ff0000d1'}}>الهيثم</h1></Link>
     <div className='lists'>

<div className='lleft'>
<Image src={im1} alt="food pic" 
       width={300} height={300}  />
     <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
   <th></th>
   <th></th>
 </tr>
 <tr>
   <td>سلطة خضرا</td>
   <td>20</td>
   <td></td>
   <td></td>
 </tr>
 <tr>
   <td>فتوش</td>
   <td>20</td>
   <td></td>
   <td></td>
 </tr>
 <tr>
   <td>علبة تومية</td>
   <td>10</td>
   <td>15</td>
   <td>20</td>
 </tr>
 <tr>
   <td>مسبحة</td>
   <td>10</td>
   <td>15</td>
   <td></td>
 </tr>
 <tr>
   <td>كول سلو</td>
   <td>10</td>
   <td>15</td>
   <td></td>
 </tr>
 
</table>

</div>
<div className='lright'>
<Image src={im2} alt="food pic" 
       width={300} height={300}  />
<table>
 <tr>
   <th>الاسم</th>
   <th>وسط</th>
   <th>كبير</th>
 </tr>
 <tr>
   <td>بطاطس</td>
   <td>15</td>
   <td>20</td>
 </tr>
 <tr>
   <td>فلافل</td>
   <td>15</td>
   <td></td>
 </tr>
 <tr>
   <td>ميكس فلافل بطاطس</td>
   <td>22</td>
   <td></td>
 </tr>
 <tr>
   <td>بطاطس بالبيض</td>
   <td>21</td>
   <td></td>
 </tr>
 <tr>
   <td></td>
   <td>50</td>
   <td></td>
 </tr>
 <tr>
   <td>بطاطس بالجبنة</td>
   <td>25</td>
   <td></td>
 </tr>
 <tr>
   <td>
بطاطس لانشون
   </td>
   <td>
     25
   </td>
   <td>
     
   </td>
 </tr>
 <tr>
   <td>
    بطاطس جبنة لانشون
   </td>
   <td>35</td>
   <td></td>
 </tr>
 <tr>
   <td>
هوت دوج
     </td>
   <td>35</td>
   <td></td>
 </tr>
 <tr>
   <td>
     هوت دوج بالجبنة
      </td>
   <td>45</td>
   <td></td>
 </tr>
 <tr>
   <td>
     سجق سوري
     </td>
   <td>35</td>
   <td></td>
 </tr>
 <tr>
   <td>
         سجق سوري بالجبنة
     </td>
   <td>45</td>
   <td></td>
 </tr>
 <tr>
   <td>
     <span>
         عرض خاص سندوتش بطاطس شامي 
     </span>
     </td>
   <td>12</td>
   <td></td>
 </tr>
 <p style={{width:'155%', textAlign: 'center', color: 'red'}}>اسبدال عيش فرنساوي بدلا من الصاج ب 5ج</p>
 
</table>
</div>
     </div>
     <div className="lists2">
          <div className="l2left">
          <Image src={im5} alt="food pic" 
       width={300} height={300}  />
            <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
 </tr>
 <tr>
   <td>فرخة كاملة مشوية</td>
   <td>220</td>
 </tr>
 <tr>
   <td>نصف فرخة مشوية</td>
   <td>110</td>
 </tr>
 <tr>
   <td>ورك مشوي</td>
   <td>60</td>
 </tr>
 <tr>
   <td>صدر مشوي</td>
   <td>65</td>
 </tr>
 <p style={{width:'120%'}}><span style={{color:'red'}}>تقدم مع أرز + بطاطس + ثومية + مخلل + عيش + كاتشب</span></p>

</table>
<Image src={im8} alt="food pic"
       width={300} height={300}  />
                   <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
 </tr>
 <tr>
   <td>برجر لحمة</td>
   <td>50</td>
 </tr>
 <tr>
   <td>برجر لحمة بالجبنة</td>
   <td>60</td>
 </tr>
 <tr>
   <td>برجر لحمة بالجبنة والبيض</td>
   <td>70</td>
 </tr>
 <tr>
   <td>تشيكن برجر</td>
   <td>45</td>
 </tr>
 <tr>
   <td>تشيكن برجر بالجبنة</td>
   <td>55</td>
 </tr>
 <tr>
   <td>تشكن برجر بالجبنة والبيض </td>
   <td>65</td>
 </tr>

</table>
          </div>
          <div className="l2right">
          <Image src={im6} alt="food pic" 
       width={300} height={300}  />
     <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
 </tr>
 <tr>
   <td>وجبة سوبر كرانشي <br /><span style={{color:'red'}}>خمس قطع صدور فراخ مقرمشة + تركي مدخن + موزاريلا </span></td>
   <td>120</td>
 </tr>
 <tr>
   <td>وجبة كريسبي <br /><span style={{color:'red'}}>خمس قطع صدور فراخ مقرمشة</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة كريسبي <br /> <span style={{color:'red'}}>ثلاث قطع صدور فراخ مقرمشة</span></td>
   <td>90</td>
 </tr>
 <tr>
   <td>وجبة زنجر حار <br /><span style={{color:'red'}}> خمس قطع صدور فراخ مقرمشة حارة</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة بانيه <br /><span style={{color:'red'}}>خمس قطع اسكالوب بانيه   </span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة كوردن بلوم <br /><span style={{color:'red'}}>اربع قطع فراخ محشية تركي و موزاريلا سايحة + صوص البشامل </span></td>
   <td>120</td>
 </tr>
 <tr>
   <td>وجبة تشكن رول <br /><span style={{color:'red'}}>اربع قطع فراخ رول محشية تركي و جبنة موزاريلا</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة فاهيتا <br /><span style={{color:'red'}}>صدور فراخ مشوية جريل و فلفل و ذرة اصفر و صوص الصويا و موزاريلا</span></td>
   <td>120</td>
 </tr>
 <tr>
   <td>وجبة مكسيكي حارة <br /><span style={{color:'red'}}>صدور فراخ مشوية جريل و فلفل الوان و بصل شرائح و صوص الصويا و هريسة شطة</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td> وجبة شيش طاووق <br /><span style={{color:'red'}}>ثلاث اسياخ فراخ متبلة مشوية جريل 350جم</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة تشكن جريل <br /> <span style={{color:'red'}}>صدور فراخ مشوية جريل</span></td>
   <td>110</td>
 </tr>
 <tr>
   <td>وجبة هوت دوج <br /> <span style={{color:'red'}}>شرائح هوت دوج مشوية مع البصل والفلفل</span></td>
   <td>80</td>
 </tr>
 <tr>
   <td>وجبة هوت دوج بالجبنة <br /> <span style={{color:'red'}}>شرائح هوت دوج مشوية مع البصل و فلفل و جبنة موزاريلا</span></td>
   <td></td>
 </tr>
</table>
          </div>
     </div>
     <div className="lists3">
          <div className="l2left">
               <Image src={im4} alt="food pic"
       width={300} height={300}  />
          <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
 </tr>
 <tr>
   <td>سوبر كرانشي </td>
   <td>60</td>
 </tr>
 <tr>
   <td>تشيكن روول</td>
   <td>50</td>
 </tr>
 <tr>
   <td>كريسبي</td>
   <td>50</td>
 </tr>
 <tr>
   <td>مكسيكي حار</td>
   <td>50</td>
 </tr>
 <tr>
   <td>زنجر حار</td>
   <td>50</td>
 </tr>
 <tr>
   <td>بانيه</td>
   <td>50</td>
 </tr>
 <tr>
   <td>شيش طاووق</td>
   <td>50</td>
 </tr>
 <tr>
   <td>سندوتش فاهيتا</td>
   <td>60</td>
 </tr>
</table>
          </div>
          <div className="l2right">
               <Image src={im7} alt="food pic"
       width={300} height={300}  />
          <table className='smTable'>
 <tr>
   <th>الاسم</th>
   <th></th>
 </tr>
 <tr>
   <td>شاورما فراخ</td>
   <td>50</td>
 </tr>
 <tr>
   <td>شاورما بالجبنة</td>
   <td>60</td>
 </tr>
 <tr>
   <td>فتة شاورما</td>
   <td>75</td>
 </tr>
 <tr>
   <td>فتة شاورما بالجبنة</td>
   <td>85</td>
 </tr>
 <tr>
   <td>وجبة شاورما عربي</td>
   <td>65</td>
 </tr>
 <tr>
   <td>وجبة شاورما عربي دوبل</td>
   <td>120</td>
 </tr>

</table>
          </div>
     </div>
   </div>
  )
}

export default Tabbles