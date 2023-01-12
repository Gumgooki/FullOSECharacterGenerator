import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  magicUserSpells,
  druidSpells,
  illusionistSpells,
  divineSpells,
  elfRunes,
  mossKnacks,
  fairyGlamours,
} from "../../data/spells";
import { chooseRandomItem } from "../../utilities/utilities";
import Option from "../../components/general/Option";

export default function SpellSelection({
  characterClass,
  setCharacterStatistics,
}) {
  const [spellSelected, setSpellSelected] = useState("");

  const chooseSpells = () => {
    let randomSpell;

    if (characterClass.arcaneSpells) {
      randomSpell = chooseRandomItem(magicUserSpells);
    }

    if (characterClass.druidSpells) {
      randomSpell = chooseRandomItem(druidSpells);
    }

    if (characterClass.illusionistSpells) {
      randomSpell = chooseRandomItem(illusionistSpells);
    }

    if (characterClass.elfRunes) {
      randomSpell = chooseRandomItem(elfRunes);
    }
    if (characterClass.mossKnacks) {
      randomSpell = chooseRandomItem(mossKnacks);
    }
    if (characterClass.divineSpells) {
      randomSpell = chooseRandomItem(divineSpells);
    }
    if (characterClass.fairyGlamours) {
      randomSpell = chooseRandomItem(fairyGlamours);
    }

    setSpellSelected(randomSpell);
    setCharacterStatistics((prevState) => {
      return { ...prevState, spell: randomSpell, hasSpells: true };
    });

    return randomSpell;
  };

  const spellsList = () => {
    let spellList = "";

    if (characterClass.arcaneSpells) {
      spellList = magicUserSpells;
    }

    if (characterClass.druidSpells) {
      spellList = druidSpells;
    }

    if (characterClass.illusionistSpells) {
      spellList = illusionistSpells;
    }

    if (characterClass.elfRunes) {
      spellList = elfRunes;
    }
    if (characterClass.mossKnacks) {
      spellList = mossKnacks;
    }
    if (characterClass.divineSpells) {
      spellList = divineSpells;
    }
    if (characterClass.fairyGlamours) {
      spellList = fairyGlamours;
    }

    return spellList.map((spell, index) => {
      return <Option key={index} value={spell.toString()}></Option>;
    });
  };

  const handleSpellChange = (event) => {
    setSpellSelected(event.target.value);
    setCharacterStatistics({
      ...setCharacterStatistics,
      spell: event.target.value,
      hasSpells: true,
    });
  };

  const hasSpells = !!(
    characterClass.arcaneSpells ||
    characterClass.divineSpells ||
    characterClass.illusionistSpells ||
    characterClass.druidSpells ||
    characterClass.fairyGlamours ||
    characterClass.elfRunes ||
    characterClass.mossKnacks
  );

  return (
    <React.Fragment>
      {hasSpells && (
        <div className="spell-selection-menu">
          <h5 className="class-ability-menu--header">
            {characterClass.name} Spells
          </h5>
          <select
            className="spells-select"
            value={spellSelected}
            onChange={handleSpellChange}
          >
            <option value="" disabled>
              Select Spell
            </option>
            {spellsList()}
          </select>
          <button
            className="button--random-spell"
            onClick={() => {
              chooseSpells();
            }}
          >
            Random Spell
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

SpellSelection.propTypes = {
  characterClass: PropTypes.object,
  setCharacterStatistics: PropTypes.func,
};
