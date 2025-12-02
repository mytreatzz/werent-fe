import CardReview from "@/components/review/CardReview";

// async function getData() {
//   const url = 'https://werent-be.vercel.app/api/products/1/reviews';

//   try {
//     const res = await fetch(url, { cache: 'no-store' });
//     if (!res.ok) {
//       console.error('Failed to fetch data');
//       return [];
//     }
//     const json = await res.json();
//     return json.data || [];
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

export default async function Home() {
  // const reviews = await getData();
  // return (
  //   <div>
  //     {(!reviews || reviews.length === 0) && (<p> No reviews available. </p>)}
  //     {reviews.map((item : any) => (
  //   <div key={item.id}>
  //     {/* <div>
  //       {(item.user?.name || "A").charAt(0).toUpperCase()}
  //     </div> */}
  //     <span>{item.user?.name || "Anonymous"}</span>
  //     <CardReview
  //       reviewContent={item.content || item.text || ""}
  //       // reviewImages={item.images || []}
  //       reviewDate={item.date || item.createdAt || "Recently"}
  //     />
  //   </div>
  //     ))}
  //   </div>          
  // )
}