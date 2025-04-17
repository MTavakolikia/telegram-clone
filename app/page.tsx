import Signs from "@/components/Signs"
import { Button, Space } from "antd"

function Home() {
  return (
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Signs />
    </Space>)
}

export default Home