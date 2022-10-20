import { useRef } from "react";

import SomeComponet from "./SomeComponet";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponet ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
