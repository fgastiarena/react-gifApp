import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => {

            const category = 'Dragon Ball';

            test('Debe hacer match con el snapshot', () => {

                    useFetchGifs.mockReturnValue({
                        data: [],
                        loading: true
                    });

                    const wrapper = shallow( < GifGrid category = { category }
                        / > );

                        expect(wrapper).toMatchSnapshot();

                    });

                test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

                        const gifs = [{
                            id: 'ABC',
                            url: 'https://localhost/cualquier/cosa.jpg',
                            title: 'cualquier cosa'
                        }]

                        useFetchGifs.mockReturnValue({
                            data: gifs,
                            loading: false
                        });

                        const wrapper = shallow( < GifGrid category = { category }
                            / > );

                            { /* expect(wrapper).toMatchSnapshot(); */ }
                            expect(wrapper.find('p').exists()).toBe(false); expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

                        });


                })