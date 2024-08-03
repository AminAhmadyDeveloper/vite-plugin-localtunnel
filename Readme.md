## Usage

To start using the library, install it in your project:

```bash
npm install react-no-pay
```

Add `useNotPaid(startDate, deadline)` to your root layout, it will be fade the body in time you say for you, that simple!

```jsx
import { useNotPaid } from 'react-no-pay';

function App() {
  useNotPaid(new Date(), 10);

  return <div>...</div>;
}
```
