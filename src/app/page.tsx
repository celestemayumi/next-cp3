import Image from "next/image";
import Card from "../components/Card"

export default function Home() {
  return (
    <main className="flex-auto flex flex-wrap">
        <Card
          title="Matrix (1999)"
          image="/matrix.jpg"
          link ="https://www.youtube.com/watch?v=vKQi3bBA1y8"
        />
        <Card
          title="Blade (1998)"
          image="/blade.jpg"
          link ="https://www.youtube.com/watch?v=kaU2A7KyOu4"
        />
        <Card
          title="Star Wars: Revenge of the Sith"
          image="/sith.jpg"
          link ="https://www.youtube.com/watch?v=5UnjrG_N8hU"
        />
        <Card
          title="The Amazing Spider-Man"
          image="/spiderman.jpg"
          link ="https://www.youtube.com/watch?v=-tnxzJ0SSOw"
        />
        <Card
          title="Barbie"
          image="/barbie.jpg"
          link ="https://www.youtube.com/watch?v=pBk4NYhWNMM"
        />
        <Card
          title="Blade (1998)"
          image="/blade.jpg"
          link ="https://www.youtube.com/watch?v=kaU2A7KyOu4"
        />
        <Card
          title="Blade (1998)"
          image="/blade.jpg"
          link ="https://www.youtube.com/watch?v=kaU2A7KyOu4"
        />
        
    </main>
  );
}
