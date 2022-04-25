import React, { useState, useEffect } from "react"
import equipmentData from "../data/equipmentData"
import weaponsData from "../data/weaponsData"
import armourData from "../data/armourData"
import {
  Cleric,
  Elf,
  Fighter,
  Thief,
  MagicUser,
  Dwarf,
  Halfling,
  armourTypes,
} from "../constants/constants"
import {
  joinDuplicates,
  chooseRandomItem,
  d6,
  calculateArmourClass,
} from "../utilities/utilities"
import ArmourOptionsContainer from "./ArmourOptionsContainer"
import WeaponOptionsContainer from "./WeaponOptionsContainer"
import GearOptionsContainer from "./GearOptionsContainer"
import Inventory from "./Inventory"
import { Trans } from "react-i18next"
import PropTypes from "prop-types"
import { Dice } from "./DiceBox"

export default function EquipmentScreen(props) {
  const {
    characterClass,
    screen,
    setScreen,
    characterModifiers,
    characterStatistics,
    setCharacterStatistics,
    characterEquipment,
    setCharacterEquipment,
    randomNumbers,
  } = props

  const [gold, setGold] = useState(null)
  const [goldRolled, setGoldRolled] = useState(false)
  const [adventuringGear, setAdventuringGear] = useState([])
  const [adventuringGearSelected, setAdventuringGearSelected] =
    useState("Backpack")
  const [armour, setArmour] = useState([])
  const [armourSelected, setArmourSelected] = useState(null)
  const [shieldSelected, setShieldSelected] = useState(false)
  const [weapons, setWeapons] = useState([])
  const [weaponSelected, setWeaponSelected] = useState("Dagger")
  const [armourClass, setArmourClass] = useState()
  const [unarmouredAC, setUnarmouredAC] = useState()

  useEffect(() => {
    //calculate base armour class

    calculateAC()

    // update default selectedWeapon to one appropriate for class

    if (characterClass.name === Cleric) {
      setWeaponSelected("Mace")
    }

    if (characterClass.name === Fighter) {
      setWeaponSelected("Sword")
    }

    if (characterClass.name === Elf) {
      setWeaponSelected("Long bow")
    }

    if (characterClass.name === Dwarf) {
      setWeaponSelected("Battle axe")
    }

    if (characterClass.name === Halfling) {
      setWeaponSelected("Sling")
    }
  }, [])

  useEffect(() => {
    calculateAC()
  }, [armour])

  const getGold = () => {
    const goldRolled = d6(3, randomNumbers) * 10

    Dice.show().roll(`3d6`)
  }

  Dice.onRollComplete = (results) => {
    const goldResult = results[0].value
    const totalGold = goldResult * 10

    setGold(totalGold)
    setGoldRolled(true)
  }

  const adventuringGearList = () => {
    return equipmentData.map((item) => (
      <option value={item.name} price={item.price} key={item.name}>
        {item.name} - {item.price} gp
      </option>
    ))
  }

  const weaponsOptions = (item) => {
    return (
      <option
        value={item.name}
        price={item.price}
        damage={item.damage}
        key={item.name}
      >
        {item.name} ({item.damage}) - {item.price} gp
      </option>
    )
  }

  const weaponsList = () => {
    return weaponsData.map((item) => weaponsOptions(item))
  }

  const updateSelectedAdventuringGear = (event) => {
    setAdventuringGearSelected(event.target.value)
  }

  const updateSelectedWeapon = (event) => {
    setWeaponSelected(event.target.value)
  }

  const handleOptionChange = (event) => {
    setArmourSelected(event.target.value)
  }

  const handleShieldChange = () => {
    if (!shieldSelected === true) {
      setShieldSelected(true)
    } else {
      setShieldSelected(false)
    }
  }

  const storeHandler = (selectedItem, action, type) => {
    if (selectedItem.includes(" (x")) {
      let itemNameNonConsolidated = selectedItem.split(" (x")
      selectedItem = itemNameNonConsolidated[0]
    }

    let storeCollection

    switch (type) {
      case "armour":
        storeCollection = armourData
        break
      case "weapon":
        storeCollection = weaponsData
        break
      case "gear":
        storeCollection = equipmentData
        break
    }

    const findItem = (object) => {
      return object.name === selectedItem
    }

    const item = storeCollection.find(findItem)

    if (type === "weapon") {
      switch (action) {
        case "buy":
          if (item.price > gold) {
            return
          }
          setGold(gold - item.price)
          setWeapons((oldItems) => [...oldItems, item.name])
          break
        case "sell":
          const index = weapons.findIndex((x) => {
            return x === item.name
          })
          let newWeaponsArray = [...weapons]
          newWeaponsArray.splice(index, 1)
          setWeapons(newWeaponsArray)
          setGold(gold + item.price)
      }
    }

    if (type === "armour") {
      let shieldCost = shieldSelected ? 10 : 0
      switch (action) {
        case "buy":
          if (item.price + shieldCost > gold) {
            return
          }
          if (shieldSelected) {
            setGold(gold - item.price - shieldCost)
            setArmour((oldArmour) => [...oldArmour, item.name, "Shield"])
          } else {
            setGold(gold - item.price)
            setArmour((oldArmour) => [...oldArmour, item.name])
          }
          break
        case "sell":
          const index = armour.findIndex((x) => {
            return x === item.name
          })
          let newArmourArray = [...armour]
          newArmourArray.splice(index, 1)
          setArmour(newArmourArray)
          setGold(gold + item.price)
      }
    }

    if (type === "gear") {
      switch (action) {
        case "buy":
          if (item.price > gold) {
            return
          }
          setGold(gold - item.price)
          setAdventuringGear((oldGear) => [...oldGear, item.name])
          break
        case "sell":
          const index = adventuringGear.findIndex((x) => {
            return x === item.name
          })

          let newGearArray = [...adventuringGear]
          newGearArray.splice(index, 1)
          setAdventuringGear(newGearArray)
          setGold(gold + item.price)
      }
    }
  }

  const calculateAC = () => {
    const [baseArmour, armourClass] = calculateArmourClass(
      characterModifiers.dexterityModAC,
      armour,
    )
    setUnarmouredAC(baseArmour)
    setArmourClass(armourClass)
  }

  const selectRandomWeapon = () => {
    const randomWeapon = chooseRandomItem(weaponsData)
    setWeaponSelected(randomWeapon.name)
  }

  const selectRandomGear = () => {
    const randomGear = chooseRandomItem(equipmentData)
    setAdventuringGearSelected(randomGear.name)
  }

  return (
    <div className="equipment-screen">
      <h3 className="header-default">
        <Trans i18nKey="equipment">Equipment</Trans>{" "}
      </h3>

      <div className="gold-container">
        <h5 className="gold">
          {gold} gp
          {gold === null && (
            <button
              className="button button-primary button--gold"
              onClick={() => setTimeout(getGold(), 200)}
            >
              Roll Gold
            </button>
          )}
        </h5>
      </div>

      {goldRolled && (
        <div className="equipment-purchase-container">
          <div className="equipment-options">
            {armour.length < 1 && (
              <ArmourOptionsContainer
                characterClass={characterClass}
                handleOptionChange={handleOptionChange}
                armourSelected={armourSelected}
                shieldSelected={shieldSelected}
                handleShieldChange={handleShieldChange}
                storeHandler={storeHandler}
              ></ArmourOptionsContainer>
            )}

            {armour.length > 0 && (
              <WeaponOptionsContainer
                characterClass={characterClass}
                weaponSelected={weaponSelected}
                updateSelectedWeapon={updateSelectedWeapon}
                weaponsList={weaponsList}
                storeHandler={storeHandler}
                selectRandomWeapon={selectRandomWeapon}
              ></WeaponOptionsContainer>
            )}

            {armour.length > 0 && (
              <GearOptionsContainer
                characterClass={characterClass}
                adventuringGearSelected={adventuringGearSelected}
                updateSelectedAdventuringGear={updateSelectedAdventuringGear}
                adventuringGearList={adventuringGearList}
                storeHandler={storeHandler}
                selectRandomGear={selectRandomGear}
              ></GearOptionsContainer>
            )}
          </div>

          <Inventory
            weapons={weapons}
            adventuringGear={adventuringGear}
            armour={armour}
            storeHandler={storeHandler}
          ></Inventory>

          {goldRolled && (
            <button
              className="button button--character-details"
              onClick={() => {
                const newCharacterEquipment = {
                  armour: armour,
                  weapons: weapons,
                  adventuringGear: adventuringGear,
                  gold: gold,

                  AC: armourClass,
                  unarmouredAC: unarmouredAC,
                }
                setCharacterEquipment(newCharacterEquipment)
                setCharacterStatistics({
                  ...characterStatistics,
                  armourClass: armourClass,
                  unarmouredAC: unarmouredAC,
                })
                setScreen({
                  ...screen,
                  equipmentScreen: false,
                  detailsScreen: true,
                })
              }}
            >
              Go to Character Details
            </button>
          )}
        </div>
      )}
    </div>
  )
}

EquipmentScreen.propTypes = {
  characterClass: PropTypes.object,
  screen: PropTypes.objectOf(PropTypes.bool),
  setScreen: PropTypes.func,
  characterModifiers: PropTypes.objectOf(PropTypes.string),
  characterStatistics: PropTypes.shape({
    hitPoints: PropTypes.number,
    armourClass: PropTypes.number,
    spell: PropTypes.string,
    hasSpells: PropTypes.bool,
    unarmouredAC: PropTypes.number,
  }),
  setCharacterStatistics: PropTypes.func,
  pointBuy: PropTypes.number,
  characterEquipment: PropTypes.shape({
    armour: PropTypes.array,
    weapons: PropTypes.array,
    adventuringGear: PropTypes.array,
    gold: PropTypes.number,
  }),
  randomNumbers: PropTypes.array,
}
