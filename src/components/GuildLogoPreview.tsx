import { Card, Label, Select } from "flowbite-react";
import { useMemo, useState } from "react";
import { DebouncedPicker } from "./DebouncedPicker";

export default function GuildLogoPreview() {
  const [back, setBack] = useState("1");
  const [backColorCode, setBackColor] = useState("#000000");
  const [up, setUp] = useState("1");
  const [upColorCode, setUpColor] = useState("#ffffff");

  const backColor = useMemo(
    () => backColorCode.replace("#", "0x"),
    [backColorCode]
  );
  const upColor = useMemo(() => upColorCode.replace("#", "0x"), [upColorCode]);

  const backOptions = useMemo(() => Array.from(Array(34).keys()).map(x => String(x+1)), []);
  const upOptions = useMemo(() => Array.from(Array(498).keys()).map(x => String(x+1)), []);

  return (
    <section className="p-10">
      <h1 className="text-xl font-semibold mb-2">
        Visualiser un logo de guilde
      </h1>
      <div className="flex flex-row gap-5">
        <Card>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="back" value="Choisir un cadre" />
            </div>
            <Select
              id="back"
              required={true}
              onChange={(e) => setBack(e.target.value)}
            >
              {backOptions.map((i) => (
                <option>{i.toString()}</option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Choisir une couleur pour le cadre" />
            </div>
            <DebouncedPicker color={backColorCode} onChange={setBackColor} />
          </div>
        </Card>
        <Card>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="up" value="Choisir un symbole" />
            </div>
            <Select
              id="up"
              required={true}
              onChange={(e) => setUp(e.target.value)}
            >
              {upOptions.map((i) => (
                <option>{i.toString()}</option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Choisir une couleur pour le symbole" />
            </div>
            <DebouncedPicker color={upColorCode} onChange={setUpColor} />
          </div>
        </Card>
        <div className="flex items-center justify-center p-10">
          <iframe
            src={`https://static.ankama.com/dofus/renderer/emblem/${up}/${back}/${upColor}/${backColor}/300_300-0.png`}
            referrerPolicy="no-referrer"
            width="300"
            height="300"
          />
        </div>
      </div>
    </section>
  );
}
