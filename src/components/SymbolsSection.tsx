/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Flag, ShieldCheck, Heart, Award, Copy, Check } from "lucide-react";

export function SymbolsSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedText(id);
          setTimeout(() => setCopiedText(null), 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed, using fallback:", err);
          fallbackCopyText(text, id);
        });
    } else {
      fallbackCopyText(text, id);
    }
  };

  const fallbackCopyText = (text: string, id: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopiedText(id);
        setTimeout(() => setCopiedText(null), 2000);
      } else {
        console.error("Fallback copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
    document.body.removeChild(textArea);
  };

  const symbols = [
    {
      id: "flower",
      name: "National Flower",
      nepali: "लालीगुराँस (Laliguras)",
      description: "Rhododendron Arboreum (Crimson Rhododendron) is the national flower of Nepal. It blooms in beautiful clusters across the hills of Nepal in springtime."
    },
    {
      id: "animal",
      name: "National Animal",
      nepali: "गाई (Cow)",
      description: "The Cow is the national animal of Nepal, protected by law as a symbol of sacredness and prosperity in Nepalese culture."
    },
    {
      id: "bird",
      name: "National Bird",
      nepali: "डाँफे (Danphe / Lophophorus)",
      description: "The Himalayan Monal (Lophophorus) is the national bird of Nepal. It features iridescent multi-colored feathers resembling the rich natural spectrum of the Himalayas."
    },
    {
      id: "color",
      name: "National Colour",
      nepali: "सिम्रिक (Crimson)",
      description: "Crimson is the national color of Nepal. It represents the bravery of Nepalese warriors and is the base color of the national flag."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-black italic tracking-tight text-white uppercase">
          State Symbols & Schedules
        </h2>
        <p className="mt-2 text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">
          Official Schedules 1, 2, and 3 of the Constitution of Nepal
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Flag Section (Schedule 1) */}
        <div className="lg:col-span-2 bg-[#0F0F12] border border-[#222] p-6 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 bg-[#DC143C]/10 border border-[#DC143C]/30">
                <Flag className="w-5 h-5 text-[#DC143C]" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-white italic">The National Flag (Schedule-1)</h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Relating to clause (2) of Article 8</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
              Nepal's flag is the <span className="text-[#DC143C] font-semibold italic">only non-quadrilateral national flag</span> in the world. It consists of two juxtaposed triangular figures with a crimson-coloured base, deep blue borders, a white crescent moon with eight rays in the upper part, and a white twelve-rayed sun in the lower part.
            </p>

            <div className="bg-[#0C0C0E] border border-[#222] p-4 font-mono text-[11px] text-slate-400 space-y-3">
              <p className="text-[#DC143C] font-bold border-b border-[#222] pb-2 flex items-center justify-between uppercase tracking-wider">
                <span>MATHEMATICAL GEOMETRY (CONSTITUTIONAL RULES)</span>
                <button
                  onClick={() => handleCopy("Schedule-1: Method of drawing the National Flag of Nepal...", "flag-geo")}
                  className="p-1 hover:text-white transition-colors"
                >
                  {copiedText === "flag-geo" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </p>
              <div className="max-h-48 overflow-y-auto space-y-2.5 pr-2">
                <p><span className="text-white font-medium">(a) Base Crimson:</span> Represents bravery and victory. Blue border signifies peace and harmony.</p>
                <p><span className="text-white font-medium">(b) Moon (Upper Part):</span> Represents the calm, soothing nature of Nepalese people and the cold Himalayas.</p>
                <p><span className="text-white font-medium">(c) Sun (Lower Part):</span> Represents the fierce resolve and sovereignty of the nation.</p>
                <p><span className="text-white font-medium">(d) Geometric Instructions:</span> Schedule-1 prescribes 24 highly precise step-by-step mathematical instructions to construct the proportions using basic ruler-and-compass geometry, making it perfectly reproducible in vector graphics.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center p-6 bg-[#0A0A0B] border border-[#222]">
            <img
              src="/flag.png"
              alt="National Flag of Nepal"
              className="h-44 object-contain filter drop-shadow-[0_4px_12px_rgba(220,20,60,0.3)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* National Anthem (Schedule 2) */}
        <div className="bg-[#0F0F12] border border-[#222] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 bg-[#DC143C]/10 border border-[#DC143C]/30">
                <Award className="w-5 h-5 text-[#DC143C]" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-white italic">National Anthem (Schedule-2)</h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Relating to clause (1) of Article 9</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              The national anthem <span className="text-[#DC143C] font-semibold italic">"Sayaun Thunga Phool Ka"</span> (Woven from Hundreds of Flowers) was officially adopted in 2006. It celebrates Nepalese sovereignty, unity, and geographical diversity.
            </p>

            <div className="bg-[#0C0C0E] border border-[#222] p-4 font-mono text-[11px] leading-loose text-slate-300 relative group">
              <button
                onClick={() => handleCopy("Sayaun Thunga Phool Ka Hami Eutai Mala Nepali\nSarvavhaum Vai Failiyeka Mechi Mahakali\nPrakitika Koti Koti Sampada Ko Aanchala...", "anthem")}
                className="absolute top-2 right-2 p-1 text-slate-500 hover:text-slate-300"
              >
                {copiedText === "anthem" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <div className="text-center space-y-1">
                <p className="text-[#DC143C] font-bold mb-2 uppercase tracking-widest font-mono text-[10px]">Sayaun Thunga Phool Ka</p>
                <p>Sayaun Thunga Phool Ka Hami Eutai Mala Nepali</p>
                <p>Sarvavhaum Vai Failiyeka Mechi Mahakali</p>
                <p>Prakitika Koti Koti Sampada Ko Aanchala</p>
                <p>Bir Haruka Ragata Le Swatantra Ra Atala</p>
                <p>Gyana Bhumi Shanti Bhumi Terai Pahad Himala</p>
                <p>Akhanda Yo Pyaro Hamro Matri Bhumi Nepal</p>
                <p>Bahul Jati Bhasa Dharma Sanskriti Chan Bishala</p>
                <p className="text-[#DC143C] font-medium">Agragami Rastra Hamro Jaya Jaya Nepal.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#222] text-[9px] text-[#555] font-mono text-center uppercase tracking-wider">
            Lyricist: Pradeep Kumar Rai • Composer: Amber Gurung
          </div>
        </div>
      </div>

      {/* Grid for other state symbols (Schedule-3 & Article 9) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {symbols.map((symbol) => (
          <div key={symbol.id} className="bg-[#0F0F12] border border-[#222] p-5 group transition-all">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">{symbol.name}</h4>
            <p className="text-[10px] text-[#DC143C] font-mono mb-2 uppercase tracking-wider">{symbol.nepali}</p>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">{symbol.description}</p>
          </div>
        ))}
      </div>

      {/* Coat of Arms Badge (Schedule-3) */}
      <div className="mt-8 bg-[#0F0F12] border border-[#222] p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-[#DC143C]/5 border border-[#DC143C]/15 shrink-0 flex items-center justify-center">
          <img
            src="/coatofarms.png"
            alt="Coat of Arms of Nepal"
            className="w-24 h-24 object-contain filter drop-shadow-[0_0_12px_rgba(220,20,60,0.2)] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-serif text-lg font-bold text-white italic">The Coat of Arms (Schedule-3)</h3>
            <span className="px-2 py-0.5 text-[8px] font-mono bg-[#DC143C]/10 text-[#DC143C] border border-[#DC143C]/20 uppercase tracking-widest">Motto: Sanskrit</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            The national emblem features the peak of Mt. Everest, green hills representing the mountainous regions of Nepal, a yellow map of Nepal, handshakes representing gender equality, the national flag, and a wreath of red rhododendrons. It is anchored by the Sanskrit national motto:
          </p>
          <p className="mt-2 font-serif text-sm text-[#DC143C] font-bold italic">
            "जननी जन्मभूमिश्च स्वर्गादपि गरीयसी" (Janani Janmabhumisch Swargadapi Gariyasi)
          </p>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
            Translation: "Mother and Motherland are Greater than Heaven."
          </p>
        </div>
      </div>
    </div>
  );
}
