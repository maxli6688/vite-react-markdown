import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import MarkdownWithMath from './components/MarkdownWithMath';
import './App.css';
import 'katex/dist/katex.min.css';
function App1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
const App = () => {
  const markdownContent0 = `
幂函数的形式一般表示为 \\( f(x) = x^a \\)，其中 \\( a \\) 是一个常数。当我们讨论一个函数在某个区间上的收敛性时，通常需要明确是在该区间的什么方面收敛。例如，是否指的是函数值在该区间是否收敛，或者是某种特定的积分或极限等。

对于幂函数 \\( f(x) = x^a \\) 在 \\( (1, \\infty) \\) 上的行为，可以从以下几个角度考虑：

1. **点态收敛**：
   - 幂函数 \\( f(x) = x^a \\) 对于任何给定的 \\( x > 1 \\)，都会产生一个确定的值。因此，从点态收敛的角度来看，每个 \\( x \\) 都有确定值，不涉及收敛问题。

2. **极限收敛**：
   - 如果讨论的是 \\( x \\to \\infty \\) 时的极限性质：
     - 当 \\( a > 0 \\)，\\( \\lim_{x \\to \\infty} x^a = \\infty \\)，函数在正无穷大处趋于无穷。
     - 当 \\( a = 0 \\)，\\( f(x) = x^0 = 1 \\)，这是一个常数函数。
     - 当 \\( a < 0 \\)，\\( \\lim_{x \\to \\infty} x^a = 0 \\)，函数在正无穷大处趋于零。

3. **积分收敛**：
   - 如果考虑幂函数在 \\( (1, \\infty) \\) 上的积分是否收敛，即 \\( \\int_1^{\\infty} x^a \\, dx \\)：
     - 若 \\( a < -1 \\)，则积分收敛。这是因为函数在无穷远处的值下降得足够快，使得总面积是有限的。
     - 若 \\( a \\ge -1 \\)，则积分发散。这是因为函数在无穷远处的衰减不够快。

因此，幂函数 \\( f(x) = x^a \\) 是否收敛在 \\( (1, \\infty) \\) 上，取决于你所问的具体“收敛”是什么。如果是积分意义上的收敛，则取决于 \\( a \\) 的值。


$x^2 + y^2 = z^2 $
  `;


  const markdownContent = `
幂函数的形式一般表示为 $$ f(x) = x^a $$，其中 $$ a $$ 是一个常数。当我们讨论一个函数在某个区间上的收敛性时，通常需要明确是在该区间的什么方面收敛。例如，是否指的是函数值在该区间是否收敛，或者是某种特定的积分或极限等。

对于幂函数 $$ f(x) = x^a $$ 在 $$ (1, \\infty) $$ 上的行为，可以从以下几个角度考虑：

1. **点态收敛**：
   - 幂函数 $$ f(x) = x^a $$ 对于任何给定的 $$ x > 1 $$，都会产生一个确定的值。因此，从点态收敛的角度来看，每个 $$ x $$ 都有确定值，不涉及收敛问题。

2. **极限收敛**：
   - 如果讨论的是 $$ x \\to \\infty $$ 时的极限性质：
     - 当 $$ a > 0 $$，$$ \\lim_{x \\to \\infty} x^a = \\infty $$，函数在正无穷大处趋于无穷。
     - 当 $$ a = 0 $$，$$ f(x) = x^0 = 1 $$，这是一个常数函数。
     - 当 $$ a < 0 $$，$$ \\lim_{x \\to \\infty} x^a = 0 $$，函数在正无穷大处趋于零。

3. **积分收敛**：
   - 如果考虑幂函数在 $$ (1, \\infty) $$ 上的积分是否收敛，即 $$ \\int_1^{\\infty} x^a \, dx $$：
     - 若 $$ a < -1 $$，则积分收敛。这是因为函数在无穷远处的值下降得足够快，使得总面积是有限的。
     - 若 $$ a \\ge -1 $$，则积分发散。这是因为函数在无穷远处的衰减不够快。

因此，幂函数 $$ f(x) = x^a $$ 是否收敛在 $$ (1, \\infty) $$ 上，取决于你所问的具体“收敛”是什么。如果是积分意义上的收敛，则取决于 $$ a $$ 的值。
`;

  const markdownContent1 = `
This is a math formula: $E = mc^2$

And a block formula:

$\\alpha$

$$\\alpha$$


$$

\\alpha


a^2 + b^2 = c^2
$$

Regular text and **bold text**.

$\\sqrt{x}$

$x + y$

$$P \\left( A=2 \\, \\middle| \\, \\dfrac{A^2}{B}>4 \\right)$$

$$f(x) = x^2 - x^\\frac{1}{\\pi}$$

$$\\mathrm{e} = \\sum_{n=0}^{\\infty} \\dfrac{1}{n!}$$



$$\\prod_{i=1}^{n} x_i - 1$$
`;
  /*
单个美元符号 $ 包裹的内容会被解释为行内公式。
两个美元符号 $$ 包裹的内容会被解释为块级公式。
*/
  return (
    <div>
      <h1>Markdown with Math</h1>
      <MarkdownWithMath content={markdownContent0} />
    </div>
  );
};

export default App;
