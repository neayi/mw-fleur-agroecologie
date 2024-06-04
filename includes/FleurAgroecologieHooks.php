<?php
/*
 * Copyright (c) 2016 The MITRE Corporation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

namespace MediaWiki\Extension\FleurAgroecologie;

use Parser;

class FleurAgroecologieHooks implements
	\MediaWiki\Hook\ParserFirstCallInitHook
{
	/**
	 * Register parser hooks to add the FleurAgroecologie keyword
	 *
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/ParserFirstCallInit
	 * @see https://www.mediawiki.org/wiki/Manual:Parser_functions
	 * @param Parser $parser
	 * @throws \MWException
	 */
	public function onParserFirstCallInit($parser)
	{
		$parser->setFunctionHook('FleurAgroecologie', [self::class, 'parserFunctionFleurAgroecologie']);

		return true;
	}

	/**
	 * Parser function handler for {{#FleurAgroecologie: .. | .. }}
	 *
	 * @param Parser $parser
	 * @param string $value
	 * @param string ...$args
	 * @return string HTML to insert in the page.
	 */
	public static function parserFunctionFleurAgroecologie(Parser $parser, string $value, ...$args)
	{
		$parser->getOutput()->addModules(['ext.mwFleurAgroecologie']);

		array_unshift($args, $value);

		$width = '400px';
		$height = '';
		$container_classes = ['fleurs-agroecologie'];
		
		$values = [];
		$bIsAligned = false;

		// try to find a few specific parameters to the template call:
		foreach ($args as $k => $v) {
			$parts = explode('=', $v);

			$key = strtolower(trim($parts[0]));

			switch ($key) {
				case 'width':
					$width = $parts[1];
					break;

				case 'height':
					$height = $parts[1];
					break;

				case 'align':
					$parts[1] = trim($parts[1]);
					if ($parts[1] == 'center')
						$container_classes[] = "mx-auto";
					else
						$container_classes[] = "float-md-" . $parts[1];

					$bIsAligned = true;		
					break;

				case 'autonomie': 
					$values['autonomie'] = $parts[1];
					break;

				case 'resilience': 
				case 'résilience': 
					$values['resilience'] = $parts[1];
					break;

				case 'travail':
					$values['travail'] = $parts[1];
					break;

				case 'viabilite':
				case 'viabilité':
					$values['viabilite'] = $parts[1];
					break;

				case 'sante':
				case 'santé':
					$values['sante'] = $parts[1];
					break;

				case 'securite': 
				case 'securité': 
					$values['securite'] = $parts[1];
					break;

				case 'territoire': 
					$values['territoire'] = $parts[1];
					break;

				case 'terroir':
					$values['terroir'] = $parts[1];
					break;

				case 'biodiversite':
				case 'biodiversité':
					$values['biodiversite'] = $parts[1];
					break;

				case 'climat':
					$values['climat'] = $parts[1];
					break;

				case 'fertilite':
				case 'fertilité':
					$values['fertilite'] = $parts[1];
					break;

				case 'ressources': 
					$values['ressources'] = $parts[1];
					break;
			}
		}
		
		if (!$bIsAligned)
			$container_classes[] = "mx-auto";

		if (empty($height))
			$height = $width;
		
		$data = [];
		foreach ($values as $name => $value)
			$data[] = "data-$name=\"$value\"";

		$ret = '<div class="' . implode(' ', $container_classes) . '" ' . implode(' ', $data) . ' style="max-width: 100%; width:' . $width . '; height:' . $height . '"></div>';

		return $ret;
	}

}
