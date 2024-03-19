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
import { Textarea } from "@/components/ui/textarea";
import {useRouter} from 'next/navigation'

export default function Task() {
  const router = useRouter();
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle>Task</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="task">Name</Label>
            <Input id="task" placeholder="" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="detail">Detail</Label>
            <Textarea id="detail" placeholder="" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              defaultValue="2023-09-15T10:30:00"
              id="date"
              type="datetime-local"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between space-x-2">
          <Button>Add</Button>
          <Button variant="outline" onClick={()=>{router.push('/')}}>Cancel</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
