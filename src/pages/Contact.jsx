import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {

const contactRef=useRef(null);

useEffect(()=>{

const tl=gsap.timeline();

tl.from(".contactHeading",{
y:80,
opacity:0,
duration:1
})

.from(".glassCard",{
y:100,
opacity:0,
stagger:.2,
duration:1
},"-=.5")

.from(".contactForm",{
y:100,
opacity:0,
duration:1
},"-=.7")

// floating animation
gsap.to(".floatBlob1",{
y:40,
x:30,
repeat:-1,
yoyo:true,
duration:8,
ease:"none"
})

gsap.to(".floatBlob2",{
y:-30,
x:-50,
repeat:-1,
yoyo:true,
duration:10,
ease:"none"
})

},[])

return (

<section
ref={contactRef}
className="
relative
overflow-hidden
bg-gradient-to-br
from-blue-50
via-white
to-indigo-100
py-24
"
>

{/* Floating blobs */}

<div
className="
floatBlob1
absolute
left-[-100px]
top-[50px]
h-[350px]
w-[350px]
rounded-full
bg-blue-400/20
blur-3xl
"
></div>

<div
className="
floatBlob2
absolute
right-[-100px]
bottom-[50px]
h-[350px]
w-[350px]
rounded-full
bg-indigo-400/20
blur-3xl
"
></div>


<div className="relative z-10 mx-auto max-w-7xl px-6">

{/* Heading */}

<div className="contactHeading text-center">

<h1 className="text-5xl md:text-6xl font-bold text-gray-900">

Contact Us

</h1>

<p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

Let's discuss cybersecurity, ISO compliance and secure business solutions.

</p>

</div>



<div className="mt-16 grid gap-10 lg:grid-cols-2">

{/* LEFT */}

<div className="space-y-8">

<div
className="
glassCard
rounded-[2rem]
border
border-white/20
bg-white/40
p-8
shadow-2xl
backdrop-blur-2xl
"
>

<h2 className="mb-8 text-3xl font-bold">

Get In Touch

</h2>


<div className="flex gap-5">

<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-blue-500/10
text-3xl
"
>
✉️
</div>

<div>

<h3 className="text-xl font-semibold">

Email Address

</h3>

<p className="mt-2 text-gray-600">

faraz@adescaretech.com

</p>

</div>

</div>


<div className="mt-8 flex gap-5">

<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-indigo-500/10
text-3xl
"
>
⏰
</div>

<div>

<h3 className="text-xl font-semibold">

Working Hours

</h3>

<p className="mt-2 text-gray-600">

Monday - Saturday
<br/>

9 AM - 7 PM

</p>

</div>

</div>

</div>


{/* SOCIAL */}

{/* FROSTED SOCIAL BUTTONS */}

<div className="glassCard flex flex-wrap gap-5">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/adescare-technologies-inc/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden

      rounded-[1.5rem]
      border
      border-white/20
      bg-white/20

      px-8
      py-5

      shadow-xl
      backdrop-blur-2xl

      transition-all
      duration-500

      hover:-translate-y-2
      hover:scale-105
      hover:shadow-[0_10px_40px_rgba(59,130,246,.25)]
    "
  >

    {/* moving glass shine */}
    <div
      className="
        absolute
        left-[-120%]
        top-0
        h-full
        w-[60%]
        rotate-12
        bg-white/30
        blur-md
        transition-all
        duration-1000
        group-hover:left-[140%]
      "
    />

    {/* glow */}
    <div
      className="
      absolute
      inset-0
      rounded-[1.5rem]
      bg-blue-500/10
      opacity-0
      blur-xl
      transition
      duration-500
      group-hover:opacity-100
      "
    />

    <span className="relative z-10 flex items-center gap-3">

      <span className="text-2xl">
        💼
      </span>

      <span className="font-semibold text-gray-800">
        LinkedIn
      </span>

    </span>

  </a>


  {/* WhatsApp */}
  <a
    href="https://wa.me/7275235488"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden

      rounded-[1.5rem]
      border
      border-white/20
      bg-white/20

      px-8
      py-5

      shadow-xl
      backdrop-blur-2xl

      transition-all
      duration-500

      hover:-translate-y-2
      hover:scale-105
      hover:shadow-[0_10px_40px_rgba(34,197,94,.25)]
    "
  >

    {/* moving shine */}
    <div
      className="
        absolute
        left-[-120%]
        top-0
        h-full
        w-[60%]
        rotate-12
        bg-white/30
        blur-md
        transition-all
        duration-1000
        group-hover:left-[140%]
      "
    />

    {/* glow */}
    <div
      className="
      absolute
      inset-0
      rounded-[1.5rem]
      bg-green-500/10
      opacity-0
      blur-xl
      transition
      duration-500
      group-hover:opacity-100
      "
    />

    <span className="relative z-10 flex items-center gap-3">

      <span className="text-2xl">
        💬
      </span>

      <span className="font-semibold text-gray-800">
        WhatsApp
      </span>

    </span>

  </a>

</div>

</div>


{/* RIGHT FORM */}

<div
className="
contactForm
rounded-[2rem]
border
border-white/20
bg-white/40
p-10
shadow-2xl
backdrop-blur-2xl
"
>

<h2 className="mb-8 text-4xl font-bold">

Send Message

</h2>

<form className="grid gap-6">

<input
type="text"
placeholder="Your Name"
className="
rounded-2xl
bg-white/40
px-5
py-4
outline-none
backdrop-blur-xl
"
/>

<input
type="email"
placeholder="Your Email"
className="
rounded-2xl
bg-white/40
px-5
py-4
outline-none
backdrop-blur-xl
"
/>

<input
type="text"
placeholder="Subject"
className="
rounded-2xl
bg-white/40
px-5
py-4
outline-none
backdrop-blur-xl
"
/>

<textarea
rows="6"
placeholder="Write message..."
className="
rounded-2xl
bg-white/40
px-5
py-4
outline-none
backdrop-blur-xl
"
/>

<button
className="
rounded-2xl
bg-blue-600
px-8
py-4
font-semibold
text-white
transition
hover:scale-[1.03]
hover:shadow-[0_10px_40px_rgba(59,130,246,.35)]
"
>

Send Message 🚀

</button>

</form>

</div>

</div>

</div>

</section>

)

}