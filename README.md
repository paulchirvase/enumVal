   **This tool is a parser that takes C++ code and generates a function that returns a string representation of a given enum value for all enumerations in the input code.**  
   Its purpose is to facilitate a form of rudimentary reflection by being used as a custom build tool in build pipelines such as what Visual Studio offers in this regard.  
*supposed to run with nodejs


Example of input code:
```C++
enum class Weapons
{
    AK47,
    M4A1,
    M16,
    Mosin,
    Knife,
    Bayonet,
    Grach,
    P1911
};
```
Function generated for the code above:
```C++
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
```
Usage:
```C++
std::cout << enumVal(Weapons::Bayonet);
```
