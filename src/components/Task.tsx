"use client"
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useRouter} from 'next/navigation'
import { useState } from "react";

interface TaskProps {
  website: string;
  username: string;
  password: string;
}

export const Task: React.FC<TaskProps> =({website, username, password}) => {
  const router = useRouter();
  const [memo, setMemo] = useState({
    website: website,
    username: username,
    password: password
  });

  const handleSave = async () => {
    try {
      const res = await fetch('/api/memos', {
        method: 'POST',
        body: JSON.stringify(memo),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      router.push('/')

    } catch (e) {
      console.log("Error:", e)
    }
  }

  return (
    <Card>
      <CardHeader className="w-auto justify-between">
        <CardTitle>Memo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="website">Memo Title</Label>
            <Input id="website" placeholder={memo.website} onChange={(e) => setMemo((prev)=>({...prev, website: e.target.value}))}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Content</Label>
            <Input id="username" placeholder={memo.username} onChange={(e) => setMemo((prev)=>({...prev, username: e.target.value}))}/>
          </div>
          <div className="space-y-2">
          <Label htmlFor="password">Note</Label>
            <Input id="password" placeholder={memo.password} onChange={(e) => setMemo((prev)=>({...prev, password: e.target.value}))}/>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between space-x-2">
          <Button onClick={handleSave}>Add</Button>
          <Button variant="outline" onClick={()=>{router.push('/')}}>Cancel</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
