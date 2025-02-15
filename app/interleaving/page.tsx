import { ClientComponentOne } from "../components/client-component-one";
import { ServerComponentOne } from "../components/server-component-one";

export default function InterLeavingPage() {
  return (
    <div>
        <h1>InterLeavingPage</h1>
        <ClientComponentOne>
            <ServerComponentOne/>
        </ClientComponentOne>
    </div>
  )
}
