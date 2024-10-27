import React, { forwardRef } from "react";

const Checkbox = forwardRef(({ id, ...props }, ref) => (
  <input
    type="checkbox"
    id={id}
    ref={ref}
    {...props}
    className="checkbox-class w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
  />
));

Checkbox.displayName = "Checkbox";

export default Checkbox;
