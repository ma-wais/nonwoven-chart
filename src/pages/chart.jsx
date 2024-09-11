import React, { useEffect, useState } from "react";

const Chart = () => {
  const [C55, setC55] = useState(520);
  const [C56, setC56] = useState(4.2);
  const [C57, setC57] = useState(8600);
  const [C58, setC58] = useState(12859);
  const [C59, setC59] = useState(16000);
  const [C60, setC60] = useState(1406);
  const [O2, setO2] = useState(0.1);
  const [AE4, setAE4] = useState(2.0);
  const [N4, setN4] = useState(0.17);
  const [AE1toAL1, setAE1toAL1] = useState([]);

  const sizes = [
    [19, 22], [19, 23], [19, 24], [19, 25], [19, 27], [19, 28], [19, 29], [20, 28],
    [20, 30], [20, 32], [20, 34], [20, 36], [21, 28], [21, 30], [21, 32], [21, 34],
    [21, 36], [21, 38], [22, 28], [22, 29], [22, 30], [22, 32], [22, 34], [22, 36],
    [22, 37], [23, 32], [23, 34], [23, 36], [23, 38], [24, 32], [24, 33], [24, 34],
    [24, 37], [24, 38], [24, 42], [25, 35], [27, 34], [27, 36], [28, 40], [29, 37],
    [29, 38], [30, 40], [32, 40], [32, 40.5], [32, 41], [32, 42], [34, 41.5], [34, 42]
  ];
  console.log (sizes[0][0]);
  
  const AE3toAL3 = [120, 115, 110, 100, 90, 80, 70, 140];
  const AE2toAL2 = AE3toAL3.map(() => C55 + 5);
  const AN4 = 0.000032 * C60;
  const AE4toAL4 = [AE4, AE4, AE4, AE4 + 0.5, AE4 + 0.5, AE4 + 1, AE4 + 1, AE4];
  const N4toV4 = [
    N4,
    O2,
    O2 + 0.003,
    O2 + 0.007,
    O2 + 0.0145,
    O2 + 0.024,
    O2 + 0.0344,
    O2 + 0.0473,
    O2,
  ];

  const columnHeaders = [
    { key: "A", value: "Size" },
    // { key: "B", value: "" },
    { key: "C", value: "Stitching" },
    { key: "D", value: "120GSM" },
    { key: "E", value: "115GSM" },
    { key: "F", value: "110GSM" },
    { key: "G", value: "100GSM" },
    { key: "H", value: "90GSM" },
    { key: "I", value: "80GSM" },
    { key: "J", value: "70GSM" },
    { key: "K", value: "140GSM" },
    { key: "L", value: "Process" },
    { key: "M", value: "" },
    { key: "N", value: N4toV4[0].toFixed(2) * 100 + "%" },
    { key: "O", value: N4toV4[1].toFixed(2) * 100 + "%" },
    { key: "P", value: N4toV4[2].toFixed(2) * 100 + "%" },
    { key: "Q", value: N4toV4[3].toFixed(2) * 100 + "%" },
    { key: "R", value: N4toV4[4].toFixed(2) * 100 + "%" },
    { key: "S", value: N4toV4[5].toFixed(2) * 100 + "%" },
    { key: "T", value: N4toV4[6].toFixed(2) * 100 + "%" },
    { key: "U", value: N4toV4[7].toFixed(2) * 100 + "%" },
    { key: "V", value: N4toV4[8].toFixed(2) * 100 + "%" },
    { key: "W", value: AE3toAL3[0] },
    { key: "X", value: AE3toAL3[1] },
    { key: "Y", value: AE3toAL3[2] },
    { key: "Z", value: AE3toAL3[3] },
    { key: "AA", value: AE3toAL3[4] },
    { key: "AB", value: AE3toAL3[5] },
    { key: "AC", value: AE3toAL3[6] },
    { key: "AD", value: AE3toAL3[7] },
    { key: "AE", value: AE4toAL4[0] + "%" },
    { key: "AF", value: AE4toAL4[1] + "%" },
    { key: "AG", value: AE4toAL4[2] + "%" },
    { key: "AH", value: AE4toAL4[3] + "%" },
    { key: "AI", value: AE4toAL4[4] + "%" },
    { key: "AJ", value: AE4toAL4[5] + "%" },
    { key: "AK", value: AE4toAL4[6] + "%" },
    { key: "AL", value: AE4toAL4[7] + "%" },
    { key: "AM", value: "L/E" },
    { key: "AN", value: "O Head" },
  ];

  useEffect(() => {
    const calculatedValues = AE3toAL3.map((value, index) => {
      const AE2 = AE2toAL2[index];
      const AE4 = 0.02;
      return calculateRow1(value, AE2, AE4);
    });

    if (JSON.stringify(calculatedValues) !== JSON.stringify(AE1toAL1)) {
      setAE1toAL1(calculatedValues);
    }
  }, [AE3toAL3, AE2toAL2]);

  const calculateRow = (index) => {
    const A5 = sizes[index][0];
    const B5 = sizes[index][1];
    
    const AM5 = Number(C56);
    const AN5 = (AN4 * A5 * B5) / 10;
    const AO5 = AM5 + Number(AN5);
    const N5 = N4 - 0.04;

    const AE5 = AE1toAL1[0] * A5 * B5;
    const AF5 = AE1toAL1[1] * A5 * B5;
    const AG5 = AE1toAL1[2] * A5 * B5;
    const AH5 = AE1toAL1[3] * A5 * B5;
    const AI5 = AE1toAL1[4] * A5 * B5;
    const AJ5 = AE1toAL1[5] * A5 * B5;
    const AK5 = AE1toAL1[6] * A5 * B5;
    const AL5 = AE1toAL1[7] * A5 * B5;

    const O5 = (AE5 + AO5) * N4 - 1;
    const P5 = O5;
    const Q5 = P5;
    const R5 = Q5;
    const S5 = R5;
    const T5 = S5;
    const U5 = T5;
    const V5 = U5;

    const W5 = AE5 + AO5 + O5;
    const X5 = AF5 + AO5 + P5;
    const Y5 = AG5 + AO5 + Q5;
    const Z5 = AH5 + AO5 + R5;
    const AA5 = AI5 + AO5 + S5;
    const AB5 = AJ5 + AO5 + T5;
    const AC5 = AK5 + AO5 + U5;
    const AD5 = AL5 + AO5 + V5;

    const L5 = C57;

    const D5 = Math.ceil(W5, 0.5);
    const E5 = Math.ceil(X5, 0.5);
    const F5 = Math.ceil(Y5, 0.5);
    const G5 = Math.ceil(Z5, 0.5);
    const H5 = Math.ceil(AA5, 0.5);
    const I5 = Math.ceil(AB5, 0.5);
    const J5 = Math.ceil(AC5, 0.5);
    const K5 = Math.ceil(AD5, 0.5);

    return [
      A5,
      B5,
      "Simple with ZIP Handle",
      D5,
      E5,
      F5,
      G5,
      H5,
      I5,
      J5,
      K5,
      L5,
      "",
      N5.toFixed(2),
      O5.toFixed(2),
      P5.toFixed(2),
      Q5.toFixed(2),
      R5.toFixed(2),
      S5.toFixed(2),
      T5.toFixed(2),
      U5.toFixed(2),
      V5.toFixed(2),

      W5.toFixed(2),
      X5.toFixed(2),
      Y5.toFixed(2),
      Z5.toFixed(2),
      AA5.toFixed(2),
      AB5.toFixed(2),
      AC5.toFixed(2),
      AD5.toFixed(2),

      AE5.toFixed(2),
      AF5.toFixed(2),
      AG5.toFixed(2),
      AH5.toFixed(2),
      AI5.toFixed(2),
      AJ5.toFixed(2),
      AK5.toFixed(2),
      AL5.toFixed(2),

      AM5,
      AN5.toFixed(5),
      AO5.toFixed(5),
    ];
  };

  const calculateRow1 = (AE3, AE2, AE4) => {
    return (AE3 / 1000 / 1550) * AE2 + (AE3 / 1000 / 1550) * AE2 * AE4;
  };

  const rows = () => {
    let calculatedRows = [];
    for (let i = 0; i < sizes.length; i++) {
      calculatedRows.push(calculateRow(i));
    }
    return calculatedRows;
  };
  console.log(rows())

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold m-10">NonWoven Chart in Action</h1>

      <div className="my-10 flex flex-row w-[100%] justify-evenly flex-wrap">
        <div>
          <label>Nonwoven: </label>
          <input
            type="number"
            value={C55}
            onChange={(e) => setC55(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Labor/Elec: </label>
          <input
            type="number"
            value={C56}
            onChange={(e) => setC56(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Plate 28x40: </label>
          <input
            type="number"
            value={C57}
            onChange={(e) => setC57(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Plate 35x50: </label>
          <input
            type="number"
            value={C58}
            onChange={(e) => setC58(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Plate 35x50: </label>
          <input
            type="number"
            value={C59}
            onChange={(e) => setC59(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Ink: </label>
          <input
            type="number"
            value={C60}
            onChange={(e) => setC60(Number(e.target.value))}
          />
        </div>
        <div>
          <label>O2: </label>
          <input
            type="number"
            value={O2}
            onChange={(e) => setO2(Number(e.target.value))}
          />
        </div>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th colSpan={14}></th>
            <th colSpan={8}>{O2 * 100 +   "%"}</th>
            <th colSpan={8}></th>
          </tr>
          <tr>
            <th colSpan={12}>Nonwoven Sheet Print</th>
            <th colSpan={2}></th>
            <th colSpan={8}>T/P</th>
            <th colSpan={8}></th>
            {AE3toAL3.map((value, idx) => (
              <th key={idx}>{value}</th>
            ))}
            <th></th>
            <th rowSpan={2}>
              Ink <br /> {AN4}
            </th>
          </tr>
          <tr>
            {columnHeaders.map((col, idx) => (
              <th colSpan={col.value === "Size" ? 2 : 1} key={idx}>
                {col.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows().map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-2 py-1 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;

{
  /* <div>
{AE1toAL1.map((value, idx) => (
  <span key={idx}>{value.toFixed(4)}</span>
))}
{AE3toAL3.map((value, idx) => (
  <span key={idx}>{value}</span>
))}
{AE2toAL2.map((value, idx) => (
  <span key={idx}>{value}</span>
))}
</div> */
}
