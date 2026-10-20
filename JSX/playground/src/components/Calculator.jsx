import { DeleteIcon } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");

  function CalculatorClick(event) {
    const value = event.currentTarget.value;

    if (value === 'C') {
      setFirst("");
      setSecond("");
      setOperator("");
      return;
    }

    if (value === 'CE') {
      setFirst(first);
      setSecond("");
      setOperator(operator);
      return;
    }

    if (value === "delete") {
      if (second) {
        setSecond((prev) =>
          prev.slice(0, -1));
      } else if (operator) {
        setOperator("");
      } else {
        setFirst((prev) =>
          prev.slice(0, -1));
      }
      return;
    }

    if (value === "+" || value === "-" || value === "*" || value === "/" || value === "%") {
      if (first !== "") {
        setOperator(value)
      }
      return;
    }

    if (value === "=") {
      if (first !== "" && second !== "" && operator !== "") {
        const uitkomst = calculate(Number(first), Number(second), operator);
        setFirst(String(uitkomst));
        setSecond("")
        setOperator("")
      }
      return
    }

    if (operator === "") {
      setFirst((prev) => prev + value)
    } else {
      setSecond((prev) => prev + value)
    }
  }

  function calculate(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Error";
      case "%": return (a / 100) * b;
      default: return "";
    }
  }

  const display = second ? `${first} ${operator} ${second}` : operator ? `${first} ${operator}` : first || "0";

  return (
    <>
      <Card title="Rekenmachine" description="Rekenmachine met React">
        <textarea
          readOnly
          rows={2}
          value={display}
          placeholder={"0"}
          className="mb-4 w-full resize-none rounded-xl border border-slate-300 bg-slate-50 p-4 text-right font-mono text-2xl text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />

        <div className="grid grid-cols-4 gap-3">
          <Button variant="action" value="C" onClick={CalculatorClick}>
            C
          </Button>
          <Button variant="action" value="CE" onClick={CalculatorClick}>
            CE
          </Button>
          <Button
            variant="delete"
            value="delete"
            onClick={CalculatorClick}
            aria-label="Wissen"
          >
            <DeleteIcon size={18} />
          </Button>
          <Button variant="operator" value="/" onClick={CalculatorClick}>
            ÷
          </Button>

          <Button value="7" onClick={CalculatorClick}>
            7
          </Button>
          <Button value="8" onClick={CalculatorClick}>
            8
          </Button>
          <Button value="9" onClick={CalculatorClick}>
            9
          </Button>
          <Button variant="operator" value="*" onClick={CalculatorClick}>
            ×
          </Button>

          <Button value="4" onClick={CalculatorClick}>
            4
          </Button>
          <Button value="5" onClick={CalculatorClick}>
            5
          </Button>
          <Button value="6" onClick={CalculatorClick}>
            6
          </Button>
          <Button variant="operator" value="-" onClick={CalculatorClick}>
            −
          </Button>

          <Button value="1" onClick={CalculatorClick}>
            1
          </Button>
          <Button value="2" onClick={CalculatorClick}>
            2
          </Button>
          <Button value="3" onClick={CalculatorClick}>
            3
          </Button>
          <Button variant="operator" value="+" onClick={CalculatorClick}>
            +
          </Button>

          <Button variant="operator" value="%" onClick={CalculatorClick}>
            %
          </Button>
          <Button value="0" onClick={CalculatorClick}>
            0
          </Button>
          <Button value="." onClick={CalculatorClick}>
            ,
          </Button>
          <Button variant="primary" value="=" onClick={CalculatorClick}>
            =
          </Button>
        </div>
      </Card>
    </>
  );
}
