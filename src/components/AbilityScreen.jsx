import React from "react"
import { Trans } from "react-i18next"
import ClassOptions from "./ClassOptions"
import AbilityScores from "./AbilityScores"
import NavigationOptions from "./NavigationOptions"
import PropTypes from "prop-types"

export default function AbilityScreen(props) {
  const {
    characterRolled,
    characterClass,
    abilityScores,
    changeCharacterClass,
    setAbilityScores,
    pointBuy,
    setPointBuy,
    characterModifiers,
    rollCharacter,
    screen,
    setScreen,
  } = props

  return (
    <div className="ability-screen container">
      <h2 className="header-default character-class-header">
        <Trans i18nKey="characterClass">Character Class</Trans>
      </h2>
      <ClassOptions
        characterClass={characterClass}
        abilityScores={abilityScores}
        changeCharacterClass={changeCharacterClass}
      ></ClassOptions>

      <h2 className="ability-scores--header header-default">
        <Trans i18nKey="abilityScores">Ability Scores</Trans>
      </h2>

      <AbilityScores
        abilityScores={abilityScores}
        setAbilityScores={setAbilityScores}
        pointBuy={pointBuy}
        setPointBuy={setPointBuy}
        characterClass={characterClass}
        characterModifiers={characterModifiers}
      ></AbilityScores>

      <NavigationOptions
        rollCharacter={rollCharacter}
        screen={screen}
        setScreen={setScreen}
        characterClass={characterClass}
      ></NavigationOptions>
    </div>
  )
}

AbilityScreen.propTypes = {
  characterRolled: PropTypes.bool,
  characterClass: PropTypes.object,
  abilityScores: PropTypes.shape({
    strength: PropTypes.number,
    strengthOriginal: PropTypes.number,
    intelligence: PropTypes.number,
    intelligenceOriginal: PropTypes.number,
    wisdom: PropTypes.number,
    wisdomOriginal: PropTypes.number,
    dexterity: PropTypes.number,
    dexterityOriginal: PropTypes.number,
    constitution: PropTypes.number,
    constitutionOriginal: PropTypes.number,
    charisma: PropTypes.number,
    charismaOriginal: PropTypes.number,
  }),
  changeCharacterClass: PropTypes.func,
  setAbilityScores: PropTypes.func,
  pointBuy: PropTypes.number,
  setPointBuy: PropTypes.func,
  characterModifiers: PropTypes.objectOf(PropTypes.string),
  rollCharacter: PropTypes.func,
  screen: PropTypes.objectOf(PropTypes.bool),
  setScreen: PropTypes.func,
}
