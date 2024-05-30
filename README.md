# Fleur de l'Agroécologie for MediaWiki

The Agroecologie Flower is a powerful way to show agroecological indicators for a farm. It has been developped by Fermes d'Avenir. This extension allows to make full use of it in your MediaWiki setups.

## Installation

Copy the `FleurAgroecologie` folder in the `extensions` folder of your mediawiki installation.

Add `wfLoadExtension( 'FleurAgroecologie' );` in your `LocalSettings.php`

## Usage
Add your flower with the following code:
```
    {{#FleurAgroecologie: resilience = 3 | fertilite = 2 }}
```

By default your charts will have a 100% width and 400px height. You can customize that by using:

    {{#FleurAgroecologie:
    width=300px |
    height=300px |
    resilience = 3 |
    fertilite = 2 }}

You can also add an alignment setting in order to float right or left (will only work if you have bootstrap in your skin):

    {{#FleurAgroecologie:
    width=300px |
    height=300px |
    align=right |
    resilience = 3 |
    fertilite = 2 }}
