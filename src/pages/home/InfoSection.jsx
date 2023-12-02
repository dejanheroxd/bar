import React from "react";

export default function InfoSection() {
  return (
    <div className="bg-primary text-white">
      <div className="border-t border-gray-500 py-20 px-6">
        <div>
          <p className="text-[37px] font-semibold">Info</p>
          <p className="text-[19px] pb-2">Der Treffpunkt in deinem Kiez</p>
        </div>
        <div>
          <p>
            Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. Klicke
            einfach auf „Text bearbeiten“ oder doppelklicke, um Inhalt
            hinzuzufügen und die Schriftart zu ändern. Es ist der ideale Ort, um
            Besuchern etwas mehr über dich zu erzählen.
          </p>
        </div>
      </div>
    </div>
  );
}
