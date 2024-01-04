import { Hero, SearchBar, CustomFilter, CarCard, ShowMore, CustomButton, ClearFilters } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || " ",
        year: searchParams.year,
        fuel: searchParams.fuel || " ",
        limit: searchParams.limit || 9,
        model: searchParams.model || " ",
    });

    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overflow-hidden bg-white">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Automobile Inventory
                    </h1>
                    <p>A variety of premium vehicles</p>
                </div>
                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <ClearFilters/>
                        <CustomFilter title="fuel" options={fuels} />
                        <CustomFilter
                            title="year"
                            options={yearsOfProduction}
                        />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car) => (
                                <CarCard car={car} />
                            ))}
                        </div>

                        <ShowMore
                            pageNumber={(searchParams.limit || 9) / 9}
                            isNext={(searchParams.limit || 9) > allCars.length}
                        />
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            oops, no results
                        </h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
