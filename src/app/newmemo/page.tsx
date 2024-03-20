import {Task} from "@/components/Task"

interface TaskProps {
  website: string;
  username: string;
  password: string;
} 

const taskProps: TaskProps = {
  website: 'google.com',
  username: 'alanchenjian@gmail.com',
  password: '***'
}
export default function Component() {
  return (
    <div className="flex justify-center">
      <Task {...taskProps}/>
    </div>
  )
}

