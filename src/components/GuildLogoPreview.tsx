import { Card, Label } from "flowbite-react";
import Select from "react-select";
import { useMemo, useState } from "react";
import { importAll } from "../utils/importAll";
import { DebouncedPicker } from "./DebouncedPicker";

const backIcons = importAll(require.context("../icons/back", false, /\.png$/));
const upIcons = importAll(require.context("../icons/up", false, /\.png$/));

const backOptions = Object.entries(backIcons).map(([fileName, image]) => ({
  label: <img src={image}></img>,
  value: fileName.replace(".png", ""),
}));
const upOptions = Object.entries(upIcons).map(([fileName, image]) => ({
  label: <img src={image}></img>,
  value: fileName.replace(".png", ""),
}));

export default function GuildLogoPreview() {
  const [back, setBack] = useState(backOptions[0]);
  const [backColorCode, setBackColor] = useState("#000000");
  const [up, setUp] = useState(upOptions[0]);
  const [upColorCode, setUpColor] = useState("#ffffff");

  const backColor = useMemo(
    () => backColorCode.replace("#", "0x"),
    [backColorCode]
  );
  const upColor = useMemo(() => upColorCode.replace("#", "0x"), [upColorCode]);

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
              isSearchable={false}
              options={backOptions}
              value={back}
              onChange={(item) => setBack((old) => item ?? old)}
            />
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
              isSearchable={false}
              options={upOptions}
              value={up}
              onChange={(item) => setUp((old) => item ?? old)}
            />
            {/* <Select
              id="up"
              required={true}
              onChange={(e) => setUp(e.target.value)}
            >
              {upOptions.map(({ label, value }) => (
                <option value={value}>{label}</option>
              ))}
            </Select> */}
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
            src={`https://static.ankama.com/dofus/renderer/emblem/${up.value}/${back.value}/${upColor}/${backColor}/300_300-0.png`}
            referrerPolicy="no-referrer"
            width="300"
            height="300"
          />
        </div>
      </div>
    </section>
  );
}
