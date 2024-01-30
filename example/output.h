std::string enumVal(Weapons v) {
    switch(v)
    {
        case Weapons::AK47: return "AK47";
        case Weapons::M4A1: return "M4A1";
        case Weapons::M16: return "M16";
        case Weapons::Mosin: return "Mosin";
        case Weapons::Knife: return "Knife";
        case Weapons::Bayonet: return "Bayonet";
        case Weapons::Grach: return "Grach";
        case Weapons::P1911: return "P1911";
    }
    return "X";
}

std::string enumVal(Colors v) {
    switch(v)
    {
        case Colors::Red: return "Red";
        case Colors::Blue: return "Blue";
        case Colors::Green: return "Green";
        case Colors::Violet: return "Violet";
        case Colors::Pink: return "Pink";
        case Colors::Yellow: return "Yellow";
        case Colors::Brown: return "Brown";
        case Colors::Gray: return "Gray";
        case Colors::Black: return "Black";
        case Colors::Purple: return "Purple";
        case Colors::Magenta: return "Magenta";
    }
    return "X";
}

std::string enumVal(Crystals v) {
    switch(v)
    {
        case Crystals::Ruby: return "Ruby";
        case Crystals::Diamond: return "Diamond";
        case Crystals::Lapis: return "Lapis";
        case Crystals::Redstone: return "Redstone";
        case Crystals::Emerald: return "Emerald";
        case Crystals::Amethyst: return "Amethyst";
        case Crystals::Undefined: return "Undefined";
    }
    return "X";
}